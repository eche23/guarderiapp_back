const EMOTIONALSTATEmodel = require("./emotional_state_model");

module.exports = {
  createEmotionalStateInfo,
  getEmotionalStateInfo,
  deleteEmotionalStateInfo,
  updateEmotionalStateInfo,
};

function createEmotionalStateInfo(req, res) {
  return EMOTIONALSTATEmodel.create(req.body)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      handdleError(err, res);
    });
}

function getEmotionalStateInfo() {
  return EMOTIONALSTATEmodel.findById(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => handdleError(err, res));
}

function updateEmotionalStateInfo(req, res) {
  return EMOTIONALSTATEmodel.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  )
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => handdleError(err, res));
}

function deleteEmotionalStateInfo(req, res) {
  return EMOTIONALSTATEmodel.findById(req.params._id)
    .deleteOne()
    .then((response) => res.status(200).json(response))
    .catch((err) => handdleError(err, res));
}

function handdleError(err, res) {
  return res.status(400).json(err);
}
