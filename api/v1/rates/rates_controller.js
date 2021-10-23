const RATESModel = require("./rates_model");
const dotenv = require("dotenv");
const config = require("../../../config")[process.env.NODE_ENV];

module.exports = {
  createRate,
  updateRate,
  getAll,
  getRate,
  deleteRate
};

function createRate(req, res) {
  return RATESModel.create(req.body)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      handdleError(err, res);
    });
}

function getAll(req, res) {
  return RATESModel.find()
    .then((rates) => {
      let result = { data: rates };
      if (!result || result.length <= 0) {
        res.status(404).send("No rates in database");
      } else {
        res.status(200).send(result);
      }
    })
    .catch((err) => handdleError(err, res));
}

function getRate(req, res) {
  return RATESModel.findById(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => handdleError(err, res));
}

function updateRate(req, res) {
  RATESModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => handdleError(err, res));
}

function deleteRate(req, res) {
  let rateID = req.params.id;
  return RATESModel.findOne({ _id: rateID })
    .then(async (event) => {
      if (event == null || event == undefined) {
        return res.status(404).send("The rate doesn't exist");
      } else {
        await event.remove();
        return res.status(200).send(event);
      }
    })
    .catch((err) => handdleError(err, res));
}

function handdleError(err, res) {
  return res.status(400).json(err);
}
