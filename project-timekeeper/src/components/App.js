import React, { Component } from "react";
import "./App.css";
import SwitchButton from "./SwitchButton";
import ResetButton from "./ResetButton";

class App extends Component {
  state = {
    time: 0,
    active: false,
    idInterval: "",
  };

  handleClick = () => {
    if (this.state.active) {
      clearInterval(this.state.idInterval);
      console.log(clearInterval(this.state.idInterval));
    } else {
      this.setState({ idInterval: setInterval(() => this.addSecond(), 1000) });
    }

    this.setState({
      active: !this.state.active,
    });
  };

  addSecond = () => {
    this.setState({
      time: this.state.time + 1,
    });
  };

  handleResetClick = () => {
    this.setState({
      time: 0,
      active: false,
    });
    clearInterval(this.state.idInterval);
  };

  render() {
    return (
      <>
        <p>{this.state.time}</p>
        <SwitchButton click={this.handleClick} active={this.state.active} />
        <ResetButton click={this.handleResetClick} />
      </>
    );
  }
}

export default App;
