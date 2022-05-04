import "./styles.css";
import Counter from "./components/counter";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.count);
  return (
    <div className="App">
      <h1>Total votes: {count}</h1>

      <Counter name="fang" />
      <Counter name="Dave" />
    </div>
  );
}
export default App;
