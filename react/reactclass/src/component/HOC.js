import React, { Component } from "react";

// Higher order component is used for sharing common business logic in multiple components
// It takes a component and return a new component with added functionalities
const HOC = (WrapperComp, value) => {
  class HocComp extends Component {
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
        <WrapperComp
          {...this.props}
          incHandler={this.incHandler}
          count={this.state.count}
        ></WrapperComp>
      );
    }
  }

  return HocComp;
};

export default HOC;
