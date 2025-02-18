import { Component } from "react";

// jsx = javascript and xml
//1. easy to wirte react code , as it allows to write html in the javascript.
//2. Everything needs to put inside a single tag(parent element).
//3. JSX converts the html tags into react element.

// props means properties
// it  allow us to pass the data to a component (as a property).
// it looks similar to an attribute which we use in case of HTML element.
// Props can not be modified (they are read-only)
class ClassComp extends Component {
  // state in react for storing and remembering  the values .

  constructor() {
    super();
    this.state = {
      count: 10,
      flag: false,
    };
  }

  increment = () => {
    // this.setState({ count: this.state.count + 5 });

    this.setState((prevState) => ({ count: prevState.count + 5 }));
    this.setState((prevState) => ({ count: prevState.count + 5 }));
  };

  render() {
    return (
      <>
        {/* <h2>this is class comp </h2> */}
        {/* <h4>name of user is {this.props.name}</h4> */}
        <h4>state count is {this.state.count}</h4>
        <button onClick={() => this.increment()}>click</button>
      </>
    );
  }
}

export default ClassComp;
