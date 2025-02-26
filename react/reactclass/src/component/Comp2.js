import React, { Component } from "react";
import HOC from "./HOC";

class Comp2 extends Component {
  render() {
    const { incHandler, count } = this.props;
    return (
      <>
        <h2>Component2 {count}</h2>
        <button onClick={() => incHandler()}>click 2</button>
      </>
    );
  }
}

export default HOC(Comp2);
