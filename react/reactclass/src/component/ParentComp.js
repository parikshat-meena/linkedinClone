import React, { useState } from "react";
import ChildComp from "./ChildComp";

function ParentComp() {
  const [subject, setSubject] = useState("maths");

  const onSubjectChange = (s) => {
    setSubject(s);
  };
  return (
    <div>
      <h2>Parent comp</h2>
      <div>subject name : {subject}</div>
      <ChildComp changeSubject={onSubjectChange} />
    </div>
  );
}

export default ParentComp;
