import React, { Component } from "react";
import "./AddTask.css";
class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: this.minDate, //tworzenie akutalnej daty w formacie rrrr-mm-dd (wycina 10 znaków metodą slice)
  };

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  //będziemy korzystać z aktualnej wartości więc wykorzystujemy event target value
  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  //piszemy tutaj tę metodę bo będziemy czyścic formularz po kazdym dodaniu zadania
  //a czyszczenie musi sie odbyć w addtask a nie w app (bez czyszczenia ta metoda handleClick powinna być w App, bo zmieniamy state)
  //a metoda addTask w komponencie App
  //jeśli add to true to wyszczyść dane
  handleClick = () => {
    const { text, checked, date } = this.state;
    if (text.length > 2) {
      const add = this.props.add(text, date, checked);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate,
        });
      }
    } else {
      alert("Za krótka nazwa");
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1; //wycięcie tego metodą slice da nam stringa "2021" jeśli pomnożę przez 1 to otrzymam number , a dodając 1 będę miała już o rok więcej czyli 2022
    maxDate = maxDate + "-12-31"; //2022-12-31
    return (
      <div className="form">
        <input
          type="text"
          placeholder="dodaj zadanie"
          value={this.state.text}
          onChange={this.handleText}
        />
        <input
          type="checkbox"
          checked={this.state.checked}
          id="important"
          onChange={this.handleCheckbox}
        />
        <label htmlFor="important">Priorytet</label>
        <br />
        <label htmlFor="date">Do kiedy zrobić </label>
        <input
          type="date"
          value={this.state.date}
          min={this.minDate}
          max={maxDate}
          onChange={this.handleDate}
        />
        <br />
        <button onClick={this.handleClick}>Dodaj</button>
      </div>
    );
  }
}

export default AddTask;
