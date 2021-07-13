import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    userName: "",
    email: "",
    pass: "",
    accept: false,
    message: "",

    errors: {
      userName: false,
      email: false,
      pass: false,
      accept: false,
    },
  };

  messages = {
    userName_incorrect:
      " Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji",
    email_incorrect: " Brak @ w emailu",
    password_incorrect: " Hasło musi mieć 8 znaków",
    accept_incorrect: " Niepotwierdzona zgoda",
  };

  handleChange = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    if (type === "text" || type === "password" || type === "email") {
      const value = e.target.value;
      this.setState({
        [name]: value,
      });
    } else if (type === "checkbox") {
      const checked = e.target.checked;
      this.setState({
        [name]: checked,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const validation = this.formValidation();
    if (validation.correct) {
      this.setState({
        userName: "",
        email: "",
        pass: "",
        accept: false,
        message: "Formularz został wysłany",

        errors: {
          userName: false,
          email: false,
          pass: false,
          accept: false,
        },
      });
    } else {
      this.setState({
        errors: {
          userName: !validation.userName,
          email: !validation.email,
          pass: !validation.password,
          accept: !validation.accept,
        },
      });
    }
  };

  formValidation = () => {
    let userName = false;
    let email = false;
    let password = false;
    let accept = false;
    let correct = false;
    if (
      this.state.userName.length > 10 &&
      this.state.userName.indexOf(" ") === -1
    ) {
      userName = true;
    }
    if (this.state.email.indexOf("@") !== -1) {
      email = true;
    }
    if (this.state.pass.length === 8) {
      password = true;
    }

    if (this.state.accept) {
      accept = true;
    }
    if (userName && email && password && accept) {
      correct = true;
    }
    return {
      correct,
      userName,
      email,
      password,
      accept,
    };
  };

  componentDidUpdate() {
    if (this.state.message !== "") {
      setTimeout(
        () =>
          this.setState({
            message: "",
          }),
        5000
      );
    }
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="user">
            Twoje imię:
            <input
              type="text"
              name="userName"
              id="user"
              value={this.state.userName}
              onChange={this.handleChange}
            />
            {this.state.errors.userName && (
              <span>{this.messages.userName_incorrect}</span>
            )}
          </label>

          <label htmlFor="email">
            Twój adres email:
            <input
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            {this.state.errors.email && (
              <span>{this.messages.email_incorrect}</span>
            )}
          </label>

          <label htmlFor="password">
            Twoje hasło:
            <input
              type="password"
              name="pass"
              id="password"
              value={this.state.pass}
              onChange={this.handleChange}
            />
            {this.state.errors.pass && (
              <span>{this.messages.password_incorrect}</span>
            )}
          </label>

          <label htmlFor="accept">
            <input
              type="checkbox"
              id="accept"
              name="accept"
              checked={this.state.accept}
              onChange={this.handleChange}
            />{" "}
            Wyrażam zgodę wszelaką
          </label>
          {this.state.errors.accept && (
            <span>{this.messages.accept_incorrect}</span>
          )}

          <button>Zapisz się</button>
        </form>
        {this.state.message && <h3>{this.state.message}</h3>}
      </div>
    );
  }
}

export default App;
