import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  height: 150px;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  flex: 1;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
`;

const Center = styled.div`
  padding: 10px 20px;
  align-items: center;
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  justify-content: space-between;
`;

const Title = styled.div`
  flex: 1;
  font-weight: bold;
  align-items: center;
  padding: 10px 20px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

//---------------------Styles closed-----------------------

axios.get("http://localhost:5001/user/1/cryptocoins").then(async (res) => {
  let list = await res.data;
  console.log(list);
  document.getElementById("myHoldings").innerHTML =
    "You Have " + list.length + " unique coins";
});
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
    alert("Purchase Successful");
    window.location.reload();
  }
  return (
    <div>
      <Title>
        <div>
          <h2>BuyCoins</h2>
        </div>
      </Title>
      <p id="myHoldings">hey</p>
      <form>
        <Wrapper>
          <div className="form-group row">
            <Left>
              <label htmlFor="Coin" className="col-sm-2 col-form-label">
                Coin
              </label>
            </Left>
            <Center>
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
            </Center>
          </div>
          <Right>
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
          </Right>
          <Center>
            <button
              onClick={handleClick}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </Center>
        </Wrapper>
      </form>
    </div>
  );
}

export default BuyCoins;
