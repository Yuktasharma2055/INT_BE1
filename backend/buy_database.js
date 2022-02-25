import Express from "express";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Date: Date,
  buyer: String,
  coinName: String,
  coinValue: String,
  priceUnit: String,
});

module.exports = mongoose.model("User", userSchema);
