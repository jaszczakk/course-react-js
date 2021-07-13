import React from "react";
import "../styles/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login">
      <div>
        <label htmlFor="">
          Podaj login:
          <input type="text" />
        </label>{" "}
      </div>
      <div>
        <label htmlFor="">
          Podaj hasło:
          <input type="password" />
        </label>
      </div>
      <button>Zaloguj</button>
    </div>
  );
};

export default LoginPage;
