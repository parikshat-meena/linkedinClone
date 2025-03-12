import React, { useState } from "react";

function FunctionalChildComp(props) {
  //   const [petAnimal, setPetAnimal] = useState("dog");
  const { fname, age, sendPetName } = props;
  const sendData = () => {
    sendPetName("dog");
  };
  return (
    <>
      <h1>This is child comp</h1>
      <h2>user is {fname}</h2>
      <h4>and age is {age}</h4>
      <button onClick={sendData}>send pet name to parent comp</button>
    </>
  );
}

export default FunctionalChildComp;
