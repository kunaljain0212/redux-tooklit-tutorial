import React from "react";
import { useSelector } from "react-redux";

function DisplayCounter() {
  const counter = useSelector((state) => state.counter.value);

  return (
    <p>{`I am just another component that displays the counter value. So here it is -> ${counter}`}</p>
  );
}

export default DisplayCounter;
