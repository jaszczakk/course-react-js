import React, { createRef, PureComponent } from "react";
import "./App.css";
import Counter from "./Counter";

class App extends PureComponent {
  state = {
    isCounterVisible: true,
  };

  textInput = createRef();
  paragraphElement = createRef();

  render() {
    const counterElement = this.state.isCounterVisible ? <Counter /> : null;
    return (
      <div>
        <input ref={this.textInput} type="text" />
        <input type="number" />
        <p ref={this.paragraphElement}>he hej eej ejej Hallo</p>
        <button onClick={this.focusTextInput}>Ustaw focus na input</button>
        <button onClick={this.addChar}>Dodaj !!!!</button>
        <button onClick={this.toggleVisibilityCounter}>
          Pokaż/ukryj Counter
        </button>
        {counterElement}
      </div>
    );
  }
  toggleVisibilityCounter = () =>
    this.setState((prevState) => ({
      isCounterVisible: !prevState.isCounterVisible,
    }));
  focusTextInput = () => this.textInput.current.focus();
  addChar = () => (this.paragraphElement.current.textContent += "!!!!");
}

export default App;
