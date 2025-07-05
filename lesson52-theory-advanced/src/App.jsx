import { useEffect, useState } from "react";
import "./App.css";

const Test = () => {
  const [count, setCount] = useState(1);

  //executes only once onMount
  useEffect(() => {
    return () => {
      console.log("Test component unmounted");
    };
  }, [count]);

  return (
    <div>
      <div onClick={() => setCount(count + 1)}>Test1</div>
    </div>
  );
};

const App = () => {
  const [useTest, setUseTest] = useState(true);
  return (
    <div>
      <button onClick={() => setUseTest((prev) => !prev)}>
        Toggle Test Component
      </button>

      {useTest && <Test />}
    </div>
  );
};

export default App;
