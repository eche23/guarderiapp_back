const REGISTERModel = require("./register_model");
const CHILDRENModel = require("../childrens/childrens_model");
const date = new Date();
const day = date.getDate();

module.exports = {
  createDay,
  registerIn,
  registerOut,
  schelude,
  updateDB,
  detDB,
};

function createDay(req, res) {
  const responseList = [];
  CHILDRENModel.find({ active: true })
    .then(async (response) => {
      responseList = response.filter((children) => {
        REGISTERModel.create({ children: children })
          .then((response) => {
            responseList.push(response);
            console.log(responseList);
          })
          .catch((err) => {});
      });
      return responseList;
    })
    .catch((err) => handdleError(err, res));
  console.log(responseList);
}

function registerIn(req, res) {
  const valueDate = date.valueOf();
  return REGISTERModel.findOneAndUpdate(
    { children: req.body.children, "register.day": { $ne: day } },
    {
      $addToSet: {
        register: {
          day: day,
          in: valueDate,
        },
      },
    },
    { new: true }
  )
    .then((response) => {
      res.json(response);
    })
    .catch((err) => handdleError(err, res));
}

function registerOut(req, res) {
  const valueDate = req.body.out; //date.valueOf();
  const dateIn = req.body.in;
  let extra;
  const rate = (req.body.rate*60*60*1000) ;
  const hours = (valueDate - dateIn) - rate;

  console.log(valueDate - dateIn);

  if (hours >= 1800000) {
    time = (hours / 60 / 60 / 1000);
    extra = Math.round(time);
  } else {
    extra = 0;
  }

  console.log(valueDate + "|" + dateIn + "|" + rate + "|" + hours + "|" + extra);

  return REGISTERModel.findOneAndUpdate(
    { children: req.body.children, "register.day": day },
    { $set: { "register.$.out": valueDate,  "register.$.extras": extra} },
    { new: true }
  )
    .then((response) => {
      res.json(response);
    })
    .catch((err) => handdleError(err, res));
}

function schelude(req, res) {
  return REGISTERModel.findOneAndUpdate(
    { children: req.body.children, "register.day": day },
    { $set: { "register.$.schelude": req.body.schelude } },
    { new: true }
  )
    .then((response) => {
      res.json(response);
    })
    .catch((err) => handdleError(err, res));
}

function detDB(req, res) {
  return REGISTERModel.findById(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => handdleError(err, res));
}

function updateDB(req, res) {
  return REGISTERModel.findByIdAndUpdate(
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
