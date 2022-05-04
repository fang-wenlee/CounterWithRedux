import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../redux/ducks/counter";

function Counter(props) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div style={{ backgroundColor: "grey", margin: "10px", padding: "10px" }}>
      <h3>{props.name}</h3>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}
export default Counter;
