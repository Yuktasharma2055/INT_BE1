const express = require("express");
const mongoose = require("mongoose");
//const userSchema = require("./buy_database");
const cors = require("cors");

// import buy from "./routes/buy";

//const buy = require("./routes/buy");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const port = 5001;

const userSchema = new mongoose.Schema({
  Date: Date,
  buyer: String,
  coinName: String,
  coinValue: String,
  priceUnit: String,
});

const User = mongoose.model("User", userSchema);

mongoose.connect(
  "mongodb://localhost:27017/myCoins",
  {
    userNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);

// import RouterDB from "./routes.js";
// app.use(RouterDB);

// available routes

app.use(require("./routes/buy"));

app.listen(port, () =>
  console.log(`server running at : http://localhost:${port}`)
);
