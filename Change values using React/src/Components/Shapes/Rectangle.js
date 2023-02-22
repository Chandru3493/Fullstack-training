import React from "react";
import "./style.css";

const Rectangle = () => {
  return (
    <div id="parent">
      <div id="card">
        <h1>Using Class Component</h1>
        <input type="text" placeholder="Enter length" id="length" />
        <br />
        <br />
        <input type="text" placeholder="Enter breadth" id="breadth" />
        <br />
        <br />
        <input type="button" value="Calculate" onClick={Calc} />
        <h1 id="output2">Area of Rectangle is &nbsp;&nbsp;&nbsp;</h1>
      </div>
    </div>
  );
};

const Calc = () => {
  const length = document.getElementById("length").value;
  const breadth = document.getElementById("breadth").value;
  const area = length * breadth;
  document.getElementById("output2").innerHTML =
    "Area of Rectangle is " + area.toFixed(2);
};

export default Rectangle;
