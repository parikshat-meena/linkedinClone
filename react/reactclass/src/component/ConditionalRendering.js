import React, { Component } from "react";

// we can render the elements on the compent based on the conditions
// 4 ways to perfom conditional rendering
// 1. if .. else syntax
// 2. element as a variable
// 3. ternary operator
// 4. short circuit
export class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userLogin: true,
      flag: false,
    };
  }
  render() {
    const { userLogin, flag } = this.state;
    let msg;
    // if (userLogin) {
    //   //   return <h2>User Login</h2>;
    //   msg = <h2>User Login</h2>;
    // } else {
    //   //   return <h3>Guest Page</h3>;
    //   msg = <h3>Guest Page</h3>;
    // }

    // return msg;
    // return userLogin ? <h2>User Login</h2> : <h3>Guest Page</h3>;

    return userLogin && <h2>User Login</h2>;
  }
}

export default ConditionalRendering;
