import React from "react";
import "../styles/Header.css";
import { Route, Switch } from "react-router";

import header1 from "../images/header1.jpg";
import header2 from "../images/header2.jpg";
import header3 from "../images/header3.jpg";
import header4 from "../images/header4.jpg";
import header5 from "../images/header5.jpg";
import header6 from "../images/header6.jpg";

const Header = () => {
  // const images = [header1, header2, header3, header4, header5, header6];
  // const index = Math.floor(Math.random() * images.length);
  // console.log(index);
  // const img = images[index];
  return (
    <>
      <Switch>
        <Route
          path="/"
          exact
          render={() => <img src={header1} alt="morze karaibskie" />}
        />
        <Route
          path="/co-zobaczyc"
          render={() => <img src={header2} alt="palmy" />}
        />
        <Route
          path="/co-zjesc"
          render={() => <img src={header3} alt="panorama gór" />}
        />
        <Route
          path="/co-kupic"
          render={() => <img src={header6} alt="legwan na skale" />}
        />
        <Route
          path="/kontakt"
          render={() => <img src={header4} alt="widok na morze" />}
        />
        <Route
          path="/admin"
          render={() => <img src={header5} alt="koza na skałach przy morzu" />}
        />
        <Route render={() => <img src={header1} alt="morze karaibskie" />} />
      </Switch>
      {/* <img src={img} alt="header" /> */}
    </>
  );
};

export default Header;
