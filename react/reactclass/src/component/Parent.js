import React, { Component } from "react";
import Child from "./Child";

export class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 10,
      name: "akash",
      post: "React developer",
    };
  }

  shouldComponentUpdate() {
    return true;
  }
  static getDerivedStateFromProps(props) {
    return {
      name: props.name,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ count: this.state.count + 1 });
    }, 2000);
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  shownName = (n) => {
    this.setState({ name: n });
  };

  render() {
    const { count, name, post } = this.state;

    return (
      <>
        <h1>parent user name {name} </h1>
        <Child
          count={count}
          name={name}
          post={post}
          increment={this.increment}
          setName={this.shownName}
        />
      </>
    );
  }
}

export default Parent;
