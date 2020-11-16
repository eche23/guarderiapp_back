const ADDRESSmodel = require("./address_model");

module.exports = {
  createAddressInfo,
  getAddressInfo,
  deleteAddressInfo,
  updateAddressInfo,
};

function createAddressInfo() {
  return ADDRESSmodel.create(req.body)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      handdleError(err, res);
    });
}

function getAddressInfo() {
  return ADDRESSmodel.findById(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => handdleError(err, res));
}

function updateAddressInfo(req, res) {
  return ADDRESSmodel.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  )
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => handdleError(err, res));
}

function deleteAddressInfo(req, res) {
  return ADDRESSmodel.findById(req.params._id)
    .deleteOne()
    .then((response) => res.status(200).json(response))
    .catch((err) => handdleError(err, res));
}

function handdleError(err, res) {
  return res.status(400).json(err);
}
