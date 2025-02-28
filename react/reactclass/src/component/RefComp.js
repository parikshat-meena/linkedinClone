import React, { Component } from "react";

// Reference is used to access DOM node directly
// it is used to access DOM node value
export class RefComp extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef.current.value, "value");
  }
  render() {
    return (
      <>
        <form>
          <label>use of reference</label>
          <input type="text" ref={this.inputRef} value={"good evening"}></input>
        </form>
      </>
    );
  }
}

export default RefComp;
