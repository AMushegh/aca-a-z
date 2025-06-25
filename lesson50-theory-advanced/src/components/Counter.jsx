import { useState } from "react";
import "./Counter.css";
import { CounterScreen } from "./CounterScreen.jsx";
import { CounterDescription } from "./CounterDescription.jsx";

// when component is being rerendered
// - on props change
// - on parent component rerender
// - on state change

// state
// - does not lose value on rerenders
// - each component has its own state

// component lifeCycle
// - mount
// - rerender
// - unmount

export const Counter = () => {
  const [count, setCount] = useState(1);

  const clickHandler = () => {
    setCount((prev) => prev + 1);
  };

  console.log(1);

  return (
    <div className="counter-container">
      <CounterScreen count={count} />
      <div className="counter-button-container">
        <button onClick={clickHandler}>+</button>
      </div>
      {count <= 10 && <CounterDescription />}
    </div>
  );
};
