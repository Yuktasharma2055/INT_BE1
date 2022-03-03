import React, { useState } from "react";
import axios from "axios";

function BuyCoins() {
  const [input, setInput] = useState({
    cryptoName: "",
    amount: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    const buyCrypto = {
      cryptoName: document.getElementById("selectCoin").value, //input.cryptoName,
      amount: input.amount,
    };
    axios.post("http://localhost:5001/cryptocoins/buy", buyCrypto);
    console.log(buyCrypto);
  }
  return (
    <div>
      <div>BuyCoins</div>
      <form>
        <div className="form-group row">
          <label htmlFor="Coin" className="col-sm-2 col-form-label">
            Coin
          </label>
          <select id="selectCoin" onChange={handleChange}>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
            <option value="USDT">USDT</option>
            <option value="BNB">BNB</option>
            <option value="USDC">USDC</option>
            <option value="XRP">XRP</option>
            <option value="ADA">ADA</option>
            <option value="SOL">SOL</option>
            <option value="LUNA">LUNA</option>
            <option value="AVAX">AVAX</option>
          </select>
        </div>

        <div className="form-group row">
          <label htmlFor="CoinQty" className="col-sm-2 col-form-label">
            Value
          </label>
          <div className="col-sm-10">
            <input
              onChange={handleChange}
              name="amount"
              value={input.amount}
              type="number"
              className="form-control"
              id="coin"
              placeholder="amount "
            />
          </div>
        </div>

        <button onClick={handleClick} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default BuyCoins;
