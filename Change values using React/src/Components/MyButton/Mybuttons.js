import React, { Component } from "react";

class Mybuttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      r: 2,
      b: 3,
      h: 5,
      pi: 3.14,
    };
  }

  change1 = () => {
    this.setState((prevState) => ({ r: 5 }));
  };
  change2 = () => {
    this.setState((prevState) => ({ b: 10 }));
  };
  change3 = () => {
    this.setState((prevState) => ({ h: 15 }));
  };
  change4 = () => {
    this.setState((prevState) => ({ pi: 100 }));
  };
  change5 = () => {
    this.setState((prevState) => ({ r: 10 }));
    this.setState((prevState) => ({ b: 14 }));
    this.setState((prevState) => ({ h: 23 }));
    this.setState((prevState) => ({ pi: 15 }));
  };
  render() {
    return (
      <>
        <h1>{this.state.r * this.state.b * this.state.h * this.state.pi}</h1>
        <button onClick={this.change1}>r</button>
        <br />
        <br />
        <button onClick={this.change2}>b</button>
        <br />
        <br />
        <button onClick={this.change3}>h</button>
        <br />
        <br />
        <button onClick={this.change4}>pi</button>
        <br />
        <br />
        <button onClick={this.change5}>Change All</button>
      </>
    );
  }
}

export default Mybuttons;
