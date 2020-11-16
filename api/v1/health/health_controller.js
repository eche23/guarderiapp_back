const HEALTHmodel = require("./health_model");

module.exports = {
  createHealthInfo,
  getHealthInfo,
  deleteHealthInfo,
  updateHealthInfo,
};

function createHealthInfo() {
  return HEALTHmodel.create(req.body)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      handdleError(err, res);
    });
}

function getHealthInfo() {
  return HEALTHmodel.findById(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => handdleError(err, res));
}

function updateHealthInfo(req, res) {
  return HEALTHmodel.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  )
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => handdleError(err, res));
}

function deleteHealthInfo(req, res) {
  return HEALTHmodel.findById(req.params._id)
    .deleteOne()
    .then((response) => res.status(200).json(response))
    .catch((err) => handdleError(err, res));
}

function handdleError(err, res) {
  return res.status(400).json(err);
}
