import React, { Component } from "react";
import "./style.css";

class Circle extends Component {
  render() {
    return (
      <div id="parent">
        <div id="card">
          <h1>Using Function Component</h1>
          <input type="text" placeholder="Enter radius" id="radius" />
          <br />
          <br />
          <input type="button" value="Calculate" onClick={Calc} />
          <h1 id="output1">Area of circle is &nbsp;&nbsp;&nbsp;</h1>
        </div>
      </div>
    );
  }
}

const Calc = () => {
  const radius = document.getElementById("radius").value;
  const area = Math.PI * radius * radius;
  document.getElementById("output1").innerHTML =
    "Area of circle is " + area.toFixed(2);
};

export default Circle;
