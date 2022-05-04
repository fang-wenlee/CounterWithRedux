import React, { useState } from "react";

function Counter(props) {
  console.log(props);
  const { name, vote, addVote, age } = props;

  const [count, setCouont] = useState(0);
  const increment = () => {
    setCouont(count + 1);
    addVote(vote + 1);
  };
  const decrement = () => {
    setCouont(count - 1);
    addVote(vote - 1);
  };
  return (
    <>
      <h1>
        {" "}
        {name} is {age} old: Vote: {count}
      </h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}
export default Counter;
