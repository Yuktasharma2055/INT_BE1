import axios from "axios";
import React from "react";
import styled from "styled-components";

//-----------------------styles-----------------------------------------------
const Container = styled.div`
  width: 100vw;
  height: 80vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1639152201720-5e536d254d81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 10px;
  height: 320px;
  background-color: lightgoldenrodyellow;
`;

const Table = styled.div`
  border: 2px solid forestgreen;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

axios.get("http://localhost:5001/cryptocoins/").then(async (res) => {
  let list = await res.data;
  console.log(list);

  //console.log(Object.values(coins));
  //key = Object.keys(coins);
  //value = Object.values(coins);

  for (var key in list) {
    var x = document.createElement("LI");
    var t = document.createTextNode(`${key} : ${list[key]}`);
    x.appendChild(t);
    document.getElementById("coinHeader").appendChild(x);
  }
});

function Coins() {
  return (
    <div>
      <Container>
        <Wrapper>
          <Table>
            <h5 id="coinHeader">Your current holdings: </h5>
          </Table>
        </Wrapper>
      </Container>
    </div>
  );
}

export default Coins;
