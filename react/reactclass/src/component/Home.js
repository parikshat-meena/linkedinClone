import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: false,
    };
  }

  onNav = () => {
    this.setState({ flag: true });
  };

  render() {
    if (this.state.flag) {
      return <Navigate to="class" />;
    }
    return (
      <>
        <button onClick={() => this.onNav()}>nav to comp</button>
      </>
    );
  }
}

export default Home;
