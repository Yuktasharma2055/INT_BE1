import express, { Router } from "express";
import mongoose from "mongoose";

const User = mongoose.model("User");

var router = express.Router();

router.get("/", (req, res) => {
  res.send("blah");
});

router.post("/home", (req, res) => {
  let { Date, buyer, coinName, coinValue, priceUnit } = req.body;

  User.then(() => {
    const user = new User({
      Date,
      buyer,
      coinName,
      coinValue,
      priceUnit,
    });
    user
      .save()
      .then((user) => {
        res.json({ message: "buy successful" });
      })
      .catch((err) => {
        console.log(err);
      });
  }).catch((err) => {
    console.log(err);
  });
});

export default router;
