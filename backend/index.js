import express from "express";
import mongoose from "mongoose";

import cors from "cors";

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
  "mongodb://localhost:27017/bitDB",
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

app.listen(port, () =>
  console.log(`server running at : http://localhost:${port}`)
);
