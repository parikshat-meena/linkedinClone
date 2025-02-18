import React, { Component } from "react";

class EventComp extends Component {
  increment(event) {
    console.log("event function", event.target.value);
  }

  render() {
    return (
      <>
        <h3>this is event component</h3>
        <button onClick={() => this.increment("hi")}>click me</button>
        {/* <button onClick={this.increment}> 2nd calling</button> */}
        <input onChange={(text) => this.increment(text)}></input>
        {/* <input onChange={this.increment}></input> */}
      </>
    );
  }
}

export default EventComp;
