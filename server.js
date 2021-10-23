const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const v1Router = require("./api/v1/routes");
const app = express();
const mongoose = require("mongoose");
const config = require("./config")[process.env.NODE_ENV];

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", v1Router);


mongoose
  .connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

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



