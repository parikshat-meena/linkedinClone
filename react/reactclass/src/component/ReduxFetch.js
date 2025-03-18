import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  incrementByAmount,
  multiplyByAmount,
} from "../store/slices/counterSlice";

function ReduxFetch() {
  const count = useSelector((state) => state.counter.value); // fetching redux state value
  const dispatch = useDispatch();
  const handleIncrement = () => {
    // dispatch(increment());
    // dispatch(incrementByAmount(2));
    dispatch(multiplyByAmount(2));
  };
  return (
    <>
      <div>ReduxFetch {count}</div>
      <button onClick={handleIncrement}>increment</button>
    </>
  );
}

export default ReduxFetch;
