import React, { Component } from "react";
import HOC from "./HOC";

class Comp1 extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       count: 0,
  //     };
  //   }

  //   incrementHandler = () => {
  //     this.setState({ count: this.state.count + 1 });
  //   };
  render() {
    const { incHandler, count } = this.props;
    return (
      <>
        <h2>value of count : {count}</h2>
        <button onClick={() => incHandler()}>click</button>
      </>
    );
  }
}

export default HOC(Comp1);
