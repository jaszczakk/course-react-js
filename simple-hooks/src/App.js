import React from "react";

const ADDITION = "addition";
const RESET = "reset";
const SUBTRACTION = "subtraction";

const Counter = (props) => {
  const [count, setCount] = React.useState(0);
  const [result, setResult] = React.useState(startValue);
  const handleMathClick = (type, number = 1) => {
    if (type === SUBTRACTION) {
      setCount(count + 1);
      setResult(result - number);
    } else if (type === RESET) {
      setCount(count + 1);
      setResult(startValue);
    } else if (type === ADDITION) {
      setCount(count + 1);
      setResult(result + number);
    }
  };

  return (
    <>
      <MathButton
        name="-10"
        number={10}
        type={SUBTRACTION}
        click={handleMathClick}
      />
      <MathButton
        name="-1"
        number={1}
        type={SUBTRACTION}
        click={handleMathClick}
      />
      <MathButton name="Reset" type={RESET} click={handleMathClick} />
      <MathButton
        name="+1"
        number={1}
        type={ADDITION}
        click={handleMathClick}
      />
      <MathButton
        name="+10"
        number={10}
        type={ADDITION}
        click={handleMathClick}
      />
      <ResultPanel count={count} result={result} />
    </>
  );
};
const MathButton = ({ click, name, number, type }) => {
  const handleOnClick = () => click(type, number);
  return <button onClick={handleOnClick}>{name}</button>;
};

const ResultPanel = ({ count, result }) => {
  const additionalInformation =
    count > 10 ? <span>. Przeciążenie procesora!</span> : null;
  return (
    <>
      <h2>
        Liczba kliknięć: {count}
        {additionalInformation}
      </h2>
      <h2>Wynik: {result}</h2>
    </>
  );
};
const startValue = 0;

// ReactDOM.render(<App result={startValue} />, document.getElementById("root"));
export default Counter;
