const EXPENSEmodel = require("./expenses_model");
const dotenv = require("dotenv");
const config = require("../../../config")[process.env.NODE_ENV];

module.exports = {
  createDB,
  updateExpenses,
};

function createDB(req, res) {
  console.log(req.body);
  return EXPENSEmodel.create(req.body)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      handdleError(err, res);
    });
}

function updateExpenses(req, res) {
    if (EXPENSEmodel.findOne({ [`.${2020}`]: { $exists: true } })){
        console.log("HOLA");
    }
    return EXPENSEmodel.findOneAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      )
        .then((response) => {
          res.json(response);
        })
        .catch((err) => handdleError(err, res));
}

function handdleError(err, res) {
  return res.status(400).json(err);
}