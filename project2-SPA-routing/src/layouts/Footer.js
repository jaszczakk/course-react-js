import React from "react";
import { Route } from "react-router-dom";
import "../styles/Footer.css";

//footer robimy dla przećwiczenia obiektu match, który możemy wykorzystać dzięki Route
// "/:cos" jak tak wpiszemy ścieżkę to w match bedziemy mieć params a tam - coś: "Majorka"
const Footer = () => {
  return (
    <div>
      <h2>Stopka</h2>
      <Route
        path="/"
        exact
        render={(props) => {
          // console.log(props);
          return (
            <p>
              Jesteś na <span>stronie głównej</span>
            </p>
          );
        }}
      />
      <Route
        path="/:page"
        exact
        render={(props) => {
          console.log(props);
          return (
            <>
              <p>
                Jesteś na <span>{props.match.params.page}</span>
              </p>
              <p>
                Jesteś na <span>{props.match.url}</span>
              </p>
              <p>
                Jesteś na <span>{props.match.path}</span>
              </p>
            </>
          );
        }}
      />
      <Route
        path="/:page/:idPlace"
        render={(props) => {
          console.log(props);
          return (
            <>
              <p>
                Jesteś na <span>{props.match.params.idPlace}</span>
              </p>
              <p>
                Jesteś na <span>{props.match.url}</span>
              </p>
              <p>
                Jesteś na <span>{props.match.path}</span>
              </p>
            </>
          );
        }}
      />
    </div>
  );
};

export default Footer;
