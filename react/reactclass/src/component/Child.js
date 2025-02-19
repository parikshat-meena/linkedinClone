import React, { Component } from "react";

// export class Child extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {};
//   }
//   render() {
//     const { count, name, post } = this.props;
//     return (
//       <>
//         <h2>child component {count}</h2>
//         <h4>
//           user is {name} and post is {post}
//         </h4>
//       </>
//     );
//   }
// }

function Child(props) {
  const { count, name, post, increment, setName } = props;
  return (
    <>
      <h2>child func component {count}</h2>
      <h4>
        user is {name} and post is {post}
      </h4>
      <button onClick={() => increment()}>child btn</button>
      <button onClick={() => setName("shrutika")}>change name</button>
    </>
  );
}

export default Child;
