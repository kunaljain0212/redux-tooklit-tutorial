import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayCounter from "./components/DisplayCounter";
import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counter/counterSlice";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState(0);

  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrementCounter = () => {
    dispatch(increment());
  };

  const handleDecrementCounter = () => {
    dispatch(decrement());
  };

  const handleIncrementByValue = () => {
    dispatch(incrementByValue(inputValue));
  };

  const handleInputChange = (e) => {
    setInputValue(parseInt(e.target.value));
  };

  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={handleIncrementCounter}>Increment</button>
      &nbsp;
      <button onClick={handleDecrementCounter}>Decrement</button>
      <br />
      <br />
      <input type="number" onChange={handleInputChange} />
      <br />
      <br />
      <button
        onClick={handleIncrementByValue}
      >{`Increment by ${inputValue}`}</button>
      <DisplayCounter />
    </div>
  );
}

export default App;
