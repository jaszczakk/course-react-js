import React, { useCallback, useState } from "react";
import "./App.css";
import Counter from "./Counter";

const App = () => {
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  const increaseFirstCounter = useCallback(
    () => setFirstCounter((prevValue) => prevValue + 1),
    []
  );

  const increaseSecondCounter = useCallback(
    () => setSecondCounter((prevValue) => prevValue + 1),
    []
  );

  const firstCounterComponent = (
    <Counter callback={increaseFirstCounter} index={1} getter="x" />
  );
  const secondCounterComponent = (
    <Counter callback={increaseSecondCounter} index={2} getter="y" />
  );

  return (
    <div>
      <p>Licznik nr 1 wynosi: {firstCounter}</p>
      <p>Licznik nr 2 wynosi: {secondCounter}</p>
      {firstCounterComponent}
      {secondCounterComponent}
      {/* <Counter counter={state} index={1} /> */}
      {/* <Counter counter={state} index={2} /> */}
    </div>
  );
};

export default App;
