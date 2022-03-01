const express = require("express");
const mongoose = require("mongoose");
const Crypto = mongoose.model("Crypto");
const router = express();

// test route

router.get("/", (req, res) => {
  const msg = "this is bitmosys task";
  res.send(msg);
});

//get route for user holdings

router.get("/user/1/cryptocoins", async (req, res) => {
  let coinsData = await Crypto.find(
    {},
    { cryptoName: 1, qtyHoldings: 1, _id: 0 }
  );
  let result = [];
  for (i = 0; i < coinsData.length; i++) {
    if (coinsData[i].qtyHoldings > 0) {
      result.push(coinsData[i].cryptoName);
    }
  }
  res.send(result);
});

//get route for getting all crypto lists available

router.get("/cryptocoins", async (req, res) => {
  let coinsData = await Crypto.find(
    {},
    { cryptoName: 1, qtyHoldings: 1, _id: 0 }
  );
  let result = {};
  for (i = 0; i < coinsData.length; i++) {
    result[coinsData[i].cryptoName] = coinsData[i].qtyHoldings;
  }

  res.send(result);
});

//post route to buy requests

router.post("/cryptocoins/buy", async (req, res) => {
  let { cryptoName, amount } = req.body;
  await Crypto.findOneAndUpdate(
    { cryptoName: cryptoName },
    {
      $inc: { qtyHoldings: amount },
    }
  );
  let coinsData = await Crypto.findOne(
    { cryptoName: cryptoName },
    { cryptoName: 1, qtyHoldings: 1, _id: 0 }
  );
  res.json(coinsData);
});

//post route route to add new type of coin available

router.post("/cryptocoins/register", (req, res) => {
  let { cryptoName, qtyHoldings } = req.body;

  const crypto = new Crypto({
    cryptoName,
    qtyHoldings,
  });
  crypto
    .save()
    .then((crypto) => {
      res.json({ message: "Register Successfull" });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
