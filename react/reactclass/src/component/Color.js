import React, { Component } from "react";
import "../styles/color.css";
import "../App.css";

export class Color extends Component {
  render() {
    return (
      <>
        {/* <div style={{ color: "red", backgroundColor: "black", margin: 10 }}>
          Color
        </div> */}
        <div className="App-link">hello React </div>
        <div className="txtPrimary">hello React </div>
      </>
    );
  }
}

export default Color;
