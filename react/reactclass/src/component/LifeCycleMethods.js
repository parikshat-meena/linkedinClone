import React, { Component } from "react";

export class LifeCycleMethods extends Component {
  // Class based components have life cycle methods
  // Function based components have life cycle hooks

  // there are 4 phases related to a component
  // 1. Mounting Phase
  // 2. Updating Phase
  // 3. Unmounting Phase
  // 4. Error Phase

  //1. Mounting Phase
  // constructor()
  // getDerivedStateFromProps() - if you want to assign props values to the state object
  // render()
  // componentDidMount() - 1. signifies that the component is mounted
  // 2. if you want to make any changes after the component has been rendered, you can write it in this method.

  //2. Updating Phase
  // shouldComponentUpdate() - this decides whether the component should be updated or not
  // render()
  // getSnapshotBeforeUpdate - it is used to get/store the old data.
  // componentDidUpdate() - it is used to Update DOM element value.

  //3.Unmounting phase
  // componentWillUnmount()
  // this method is called when the component is about the destroyed(unmounted)
  // so, basically , any cleanup acitivity should be performed here.
  // it will be use to make sure that we disconnect to all links or any external connection

  constructor(props) {
    super(props);

    this.state = {
      color: "Red",
    };
  }

  //   static getDerivedStateFromProps(props) {
  //     return {
  //       color: props.color,
  //     };
  //   }

  componentDidMount() {
    console.log("component is mounted successfully");
    setTimeout(() => this.setState({ color: "Blue" }), 2000);
  }

  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate(props, state) {
    return (document.getElementById(
      "beforeUpdate"
    ).innerHTML = `My color was : ${state.color}`);
  }

  componentDidUpdate() {
    document.getElementById("afterUpdate").innerHTML =
      "My color is : " + this.state.color;
  }

  componentWillUnmount() {
    console.log("component getting destroyed");
  }
  render() {
    // throw new Error("something is wrong");
    return (
      <>
        <div>LifeCycleMethods {this.state.color}</div>;
        <div id="beforeUpdate"></div>
        <div id="afterUpdate"></div>
      </>
    );
  }
}

export default LifeCycleMethods;
