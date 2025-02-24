import React, { Component } from "react";

export class UserComp extends Component {
  render() {
    const { name } = this.props;
    if (name === "Virat") throw new Error("Invalid user " + name);
    return <div>User is {name}</div>;
  }
}

export default UserComp;
