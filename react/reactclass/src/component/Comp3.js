import React, { Component } from "react";

export class Comp3 extends Component {
  render() {
    const { incrementHandler, count } = this.props;
    return (
      <>
        <h2>value of count : {count}</h2>

        <button onClick={() => incrementHandler()}>click</button>
      </>
    );
  }
}

export default Comp3;
