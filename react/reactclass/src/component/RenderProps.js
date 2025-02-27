import React, { Component } from "react";

// we can do similiar things as HOC
// We can share common business logic with multiple components
export class RenderProps extends Component {
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
      <div>
        <h5>This is a counter component</h5>
        {/* <p>{this.props.render(true)}</p> */}
        {this.props.render(this.state.count, this.incHandler)}
      </div>
    );
  }
}

export default RenderProps;
