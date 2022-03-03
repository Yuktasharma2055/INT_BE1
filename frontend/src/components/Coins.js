import axios from "axios";
import React from "react";

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
      <h1 id="coinHeader">hello </h1>
    </div>
  );
}

export default Coins;
