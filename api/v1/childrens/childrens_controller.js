const CHILDRENModel = require("./childrens_model");
const dotenv = require("dotenv");
const config = require("../../../config")[process.env.NODE_ENV];

module.exports = {
  createChildren,
  updateChildren,
  getAll,
  getChildren,
  getActives
};

function createChildren(req, res) {
  return CHILDRENModel.create(req.body)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      handdleError(err, res);
    });
}

function getAll(req, res) {
  return CHILDRENModel.find()
    .then((childrens) => {
      let result = { data: childrens };
      if (!result || result.length <= 0) {
        res.status(404).send("No childrens in database");
      } else {
        res.status(200).send(result);
      }
    })
    .catch((err) => handdleError(err, res));
}

function getChildren(req, res) {
  return CHILDRENModel.findById(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => handdleError(err, res));
}

function getActives(req, res) {
  return CHILDRENModel.find()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => handdleError(err, res));
}

function updateChildren(req, res) {
      CHILDRENModel.findByIdAndUpdate(
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
