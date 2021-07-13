import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  //nie tak jak w komponencie klasowym, że wystarczy w setState zmienić jeden element ze state, a reszta pojawi się bez zmian
  //w hookach trzeba przekazać wszystkie elementy state;
  //jeśli zmieniam tylko jeden element to pozostałe mogę dodać jako destrukturyzacje tablicy ...state

  //gdy chcemy przekazać poprzednią wartość to wtedy przekazujemy do funkcji wartość prev.
  //przy zmianie wartości state o 1 nie możemy zapisywać inkrementacji (++) tylko jawnie dodajemy +1!!!
  const handler = () => setCounter((prevValue) => prevValue + 1);
  const toggleVisibilityCounter = () => setIsActive((prevValue) => !prevValue);
  const [isActive, setIsActive] = useState(true);

  const counterComponent = isActive ? (
    <Counter rerenderCounter={counter} />
  ) : null;

  // useEffect(() => {
  //   alert("Hello");
  // }, []);

  return (
    <div>
      <button onClick={toggleVisibilityCounter}>Pokaż/ukryj komponent</button>
      <button onClick={handler}>Przerenderuj komponent</button>
      {counterComponent}
    </div>
  );
};

const Counter = ({ rerenderCounter }) => {
  const [counter, setCounter] = useState(0);

  const handleMouseMove = (event) => setCounter(event.clientX);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [rerenderCounter]);

  return (
    <div>
      <p>{counter}</p>
      <p>{rerenderCounter}</p>
    </div>
  );
};

export default App;
