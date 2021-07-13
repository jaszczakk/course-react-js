import React, { useEffect, useLayoutEffect, useState } from "react";
import "./style.css";
import Triangle from "./Triangle";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleOnClick = () => setIsVisible((prev) => !prev);
  const triangleComponent = isVisible ? <Triangle /> : null;

  return (
    <div>
      <button onClick={handleOnClick}>Toggle</button>
      {triangleComponent}
    </div>
  );
};

export default App;
