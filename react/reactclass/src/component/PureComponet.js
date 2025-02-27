import React, { Component, PureComponent } from "react";

//Pure component prevents unnecessary rendering of the component
//if we are passing same data to a component, it will avoid rendering of the componet.
//it will render only if the value of props changes.
export class PureComp extends PureComponent {
  render() {
    console.log("Pure componen getting called");
    const { name } = this.props;
    if (name === "Virat") throw new Error("Invalid user " + name);
    return <div>User is {name}</div>;
  }
}

export default PureComp;
