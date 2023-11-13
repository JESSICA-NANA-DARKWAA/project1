import React, { useState } from "react";
const state = () => {
  const array = useState(0);
  const counter = array[0];
  const setCounter = array[1];

  function increaseCounter() {
    setCounter(setCounter + 1);
  }
  console.log(array);
  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClink={increaseCounter}>Increase</button>
    </div>
  );
};

export default state;
