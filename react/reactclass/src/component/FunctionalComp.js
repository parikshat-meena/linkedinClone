import React, { useEffect, useState } from "react";
import FunctionalChildComp from "./FunctionalChildComp";

// Difference between React Class Component and Functional Component
//1. In Class Component , we have lifeCycle methods and in Functional component, we have lifecycle hooks
//2. state management - in class comp, we use this.state and this.setState() but in functional comp we use useState hook
//3. class component is slightly slower due to "this" binding, functional comps are faster and optimised
//4. In class component ,more complex coding as it require more boilerplate, needs constructor. In functional comp , it simple and clean.

// Hooks
// useEffect -for Lifecycle side effects
// useState - for state management
// useContext - for accessing the context
function FunctionalComp() {
  const [fname, setFname] = useState("manasi");
  const [nameFromChild, setNameFromChild] = useState("");
  //   useEffect(() => {
  //     console.log("using useEffect for mounting"); // this will get called only at component mounting
  //   }, []);

  //   useEffect(() => {
  //     console.log("using useEffect for updating phase");
  //     // this will get called only if the value of dependency changes.
  //   }, [fname]);

  useEffect(() => {
    return () => {
      console.log("using useEffect for unmounting phase");
    };
    // this will get called before component gets destroyed
  }, []);

  const onButtonClick = () => {
    setFname(fname == "manasi" ? "vaishnavi" : "manasi");
  };

  const showPetName = (petName) => {
    setNameFromChild(petName);
  };
  return (
    <>
      <h2>FunctionalComp {fname}</h2>
      <h3>Pet Name from child comp : {nameFromChild}</h3>
      <button onClick={onButtonClick}>Change Name</button>
      <FunctionalChildComp fname={fname} age={"20"} sendPetName={showPetName} />
    </>
  );
}

export default FunctionalComp;
