import "./styles.css";
import Counter from "./counter";
import React, { useState } from "react";

function App() {
  const [vote, setVote] = useState(10);

  // const decrementVote = () =>{
  //   setVote(vote-1);
  // }
  return (
    <div className="App">
      <hr />
      <h1>total:{vote} </h1>

      <Counter name="fang" vote={vote} addVote={setVote} age={10} />
      <Counter name="Dave" vote={vote} addVote={setVote} age={60} />
    </div>
  );
}
export default App;
