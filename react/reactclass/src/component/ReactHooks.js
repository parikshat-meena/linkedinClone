import React, { useState, useEffect } from "react";

//1. react hook will work in functional component only
// useState, useEffect, useContext, useCallback, useMemo, useFocusEffect
function ReactHooks() {
  const [fname, setFname] = useState(); // useState is used for managing state in functional comp.

  // useEffect is used for adding lifecycle methods in the functional comp.
  useEffect(() => {
    console.log("mounting phase");
  }, []); // Empty dependency means it will get called only at mounting phase

  useEffect(() => {
    console.log("name updated to :", fname);
  }, [fname]); // dependency means it will get called each time dependency is changes

  useEffect(() => {
    return () => {
      console.log("component is getting unmount");
    };
  }, []); // any function inside return callback will be called at the unmounting phase.

  return <div>ReactHooks</div>;
}

export default ReactHooks;
