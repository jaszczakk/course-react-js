import "./App.css";
import React, { createRef, useEffect, useRef, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const textInputRef = useRef(true);
  const numberInputRef = createRef(true);

  //clean up function
  useEffect(() => {
    return () => (textInputRef.current = false);
  }, []);

  const focusOnInput = () => textInputRef.current.focus();
  const increaseCounter = () => setCounter(counter + 1);

  //ustawia nam focus na samym początku, nawet jak nie kliknęliśmy w button
  useEffect(() => {
    textInputRef.current.focus();
  }, []);

  console.log(textInputRef.current);
  console.log(numberInputRef.current);

  return (
    <div>
      <input ref={textInputRef} type="text" />
      <input ref={numberInputRef} type="number" />
      <button onClick={focusOnInput}>Ustaw focus na input</button>
      <button onClick={increaseCounter}>Przerenderuj komponent</button>
    </div>
  );
};

export default App;
