import "./App.css";
import BuyCoins from "./components/BuyCoins";
import axios from "axios";

import React, { Component } from "react";
import Coins from "./components/Coins";

function App() {
  return (
    <div className="App">
      <BuyCoins />
      <Coins />
    </div>
  );
}

export default App;
