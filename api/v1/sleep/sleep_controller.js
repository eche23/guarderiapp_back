const SLEEPmodel = require("./sleep_model");

module.exports = {
  createSleepInfo,
  getSleepInfo,
  deleteSleepInfo,
  updateSleepInfo,
};

function createSleepInfo() {
  return SLEEPmodel.create(req.body)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      handdleError(err, res);
    });
}

function getSleepInfo() {
  return SLEEPmodel.findById(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => handdleError(err, res));
}

function updateSleepInfo(req, res) {
  return SLEEPmodel.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  )
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => handdleError(err, res));
}

function deleteSleepInfo(req, res) {
  return SLEEPmodel.findById(req.params._id)
    .deleteOne()
    .then((response) => res.status(200).json(response))
    .catch((err) => handdleError(err, res));
}

function handdleError(err, res) {
  return res.status(400).json(err);
}
