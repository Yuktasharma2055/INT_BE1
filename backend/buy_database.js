const express = require("express");
const mongoose = require("mongoose");

const cryptoSchema = new mongoose.Schema({
  cryptoName: String,
  qtyHoldings: Number,
});

module.exports = cryptoSchema;
