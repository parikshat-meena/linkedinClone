import React, { Component } from "react";
import PureComp from "./PureComponet";

export class Comp4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <>
        <div>Comp4 {this.state.count}</div>
        <button onClick={() => this.incHandler()}>click</button>
        <PureComp name={this.state.count < 5 ? "sachin" : "rohit"} />
      </>
    );
  }
}

export default Comp4;
