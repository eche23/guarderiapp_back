const FEEDINGmodel = require("./feeding_model");

module.exports = {
  createFeedingInfo,
  getFeedingInfo,
  deleteFeedingInfo,
  updateFeedingInfo,
};

function createFeedingInfo() {
  return FEEDINGmodel.create(req.body)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      handdleError(err, res);
    });
}

function getFeedingInfo() {
  return FEEDINGmodel.findById(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => handdleError(err, res));
}

function updateFeedingInfo(req, res) {
  return FEEDINGmodel.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  )
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => handdleError(err, res));
}

function deleteFeedingInfo(req, res) {
  return FEEDINGmodel.findById(req.params._id)
    .deleteOne()
    .then((response) => res.status(200).json(response))
    .catch((err) => handdleError(err, res));
}

function handdleError(err, res) {
  return res.status(400).json(err);
}
