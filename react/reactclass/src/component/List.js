import React, { Component } from "react";

export class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [
        { id: 1, name: "Red" },
        { id: 2, name: "Green" },
        { id: 3, name: "Blue" },
        { id: 4, name: "Pink" },
      ],
    };
  }
  render() {
    const { colors } = this.state;

    return (
      <div>
        <h2>This is a color component</h2>
        <ul>
          {colors.map((val, index) => {
            return <li key={val.id}>{val.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default List;
