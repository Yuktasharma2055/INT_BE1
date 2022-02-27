const express = require("express");
const mongoose = require("mongoose");

const User = mongoose.model("User");

const router = express();

router.get("/", (req, res) => {
  res.send("blah");
});

router.get("/user/1/cryptocoins", (req, res) => {
  res.send("this is API to Get user-owned coins");
});

router.get("/cryptocoins", (req, res) => {
  res.send("API to Get the list of crypto coins");
});

router.post("/cryptocoins/buy", (req, res) => {
  let { coinValue, priceUnit } = req.body;

  const user = new User({
    coinValue,
    priceUnit,
  });

  user
    .save()
    .then((user) => {
      res.json({ message: "Buy Successfull" });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
