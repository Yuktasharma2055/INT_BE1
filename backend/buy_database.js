const express = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Date: Date,
  buyer: String,
  coinName: String,
  coinValue: String,
  priceUnit: String,
});

module.exports = userSchema;
