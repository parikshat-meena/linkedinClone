import React, { useState } from "react";

function ChildComp(props) {
  const [count, setCount] = useState(0);
  const { changeSubject } = props;
  const onChange = () => {
    changeSubject(count);
    setCount(count + 1);
  };
  return (
    <div>
      <h3>child comp</h3>
      <button onClick={() => onChange()}>changeSubject</button>
    </div>
  );
}

export default ChildComp;
