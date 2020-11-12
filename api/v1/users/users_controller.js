const Users = require("./users_model");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const config = require("../../../config")[process.env.NODE_ENV];
const authJWT = require("./jwt");
const { use } = require("passport");
const _UPDATE_DEFAULT_CONFIG = {
  new: true,
  runValidators: true,
};
 
module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  logIn,
};

function getUser(req, res) {
  return Users.findById(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => handdleError(err, res));
}

function createUser(req, res) {
  return Users.create(req.body)
    .then((user) => {
      sendEmail(
        user.email,
        "Bienvenido " + user.email,
        "<img src='https://www.guarderiapopita.es/wp-content/uploads/2017/07/guarderia-infantil-popita-logo2x.png'>" +
          "<h2>Bienvenido a nuestra web " +
          user.email +
          ".</h2><br>" +
          "<h3>Tu email de acceso a nuestra web es: " +
          user.email +
          "</h3>"
      );
      let dataToken = authJWT.createToken(user);
      let userResponde = {
        acces_token: dataToken[0],
        refresh_token: authJWT.createRefreshToken(user),
        expires_in: dataToken[1],
        role: user.role,
        id: user._id,
      };
      return res.status(200).send(userResponde);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
}

function logIn(req, res) {
  if (req.body.password && req.body.email) {
    Users.findOne({
      email: req.body.email,
    })
      .select("_id password role sportInfo.license_number")
      .exec((err, userResult) => {
        if (err || !userResult) {
          return res.status(401).send({
            error: "LoginError",
          });
        }

        userResult.comparePassword(
          req.body.password,
          userResult.password,
          function (err, isMatch) {
            if (isMatch & !err) {
              let dataToken = authJWT.createToken(userResult);
              return res.status(200).send({
                acces_token: dataToken[0],
                refresh_token: authJWT.createRefreshToken(userResult),
                expires_in: dataToken[1],
                role: userResult.role,
                id: userResult._id,
              });
            } else {
              return res.status(401).send({
                error: "LoginError",
              });
            }
          }
        );
      });
  } else {
    return res.status(401).send({
      error: "BadRequest",
    });
  }
}

//To do: Tests in front
function updateUser(req, res) {
  return Users.findByIdAndUpdate(
    req.params.id,
    req.body,
    _UPDATE_DEFAULT_CONFIG
  )
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(400).json({ err: "there is no user" });
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}

function deleteUser(req, res) {
  return Users.findById(req.params.id)
    .deleteOne()
    .then((result) => {
      res.status(400).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
}

function sendEmail(email, subject, html) {
  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "Gmail",
    auth: {
      user: config.email,
      pass: config.password,
    },
  });

  var mailOptions = {
    from: "Guardería El Duende <guarderiaelduende@guarderiaelduende.com>",
    to: email,
    subject: subject,
    html: html,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
