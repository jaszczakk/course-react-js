import React, { useState } from "react";

const Form = ({ onClickAdd }) => {
  const [inputData, setInputData] = useState("");
  const idRandom = () => {
    Math.random().toString(16).slice(-4);
  };

  const handlerAddClick = () => {
    const course = {
      id: idRandom,
      title: inputData,
    };
    onClickAdd({ type: "ADD", course });
    setInputData("");
  };

  const handlerChange = (event) => {
    setInputData(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handlerChange} value={inputData} />
      <button onClick={handlerAddClick}>Dodaj kurs</button>
    </div>
  );
};

export default Form;
