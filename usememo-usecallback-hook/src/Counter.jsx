import React from "react";

const Counter = ({ index, callback, getter }) => {
  console.log(`render licznika nr: ${index}`);
  return (
    <div>
      <button onClick={callback}>Zwiększ licznik {index} </button>
    </div>
  );
};

export default React.memo(Counter);
