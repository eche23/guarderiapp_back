const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config")[process.env.NODE_ENV];


mongoose
  .connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(
    () => {
      console.log("Conecting");
      app.listen(config.port, () => {
        console.log(`API: ${config.url}${config.port}`);
      });
    },
    (err) => {
      console.log(`ERROR conecting with db: ${err}`);
    }
  )
  .catch((err) => {
    console.log(`ERROR other type: ${err}`);
  });

  app.get("/", function (req, res) {
    res.send("Hello World");
  });

