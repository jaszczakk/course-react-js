import React, { createRef, PureComponent } from "react";

class Counter extends PureComponent {
  state = {
    counter: 0,
  };

  componentRef = createRef();
  render() {
    const { counter } = this.state;
    return (
      <div ref={this.componentRef}>
        <p>Wartość licznika wynosi: {counter}</p>
        <button onClick={this.asynIncreaseCounterValue}>
          Pobierz asynchroniczne dane
        </button>
      </div>
    );
  }
  asynIncreaseCounterValue = () =>
    setTimeout(() => {
      if (this.componentRef.current) {
        this.setState((prevState) => ({
          counter: prevState.counter + 1,
        }));
      }
    }, 3000);
}

export default Counter;
