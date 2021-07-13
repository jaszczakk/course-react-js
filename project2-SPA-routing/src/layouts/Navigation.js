import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
  { name: "o mnie", path: "/", exact: true },
  { name: "co zobaczyć", path: "/co-zobaczyc" },
  { name: "co zjeść", path: "/co-zjesc" },
  { name: "co kupić", path: "/co-kupic" },
  { name: "kontakt", path: "/kontakt" },
  { name: "admin", path: "/admin" },
];

const Navigation = () => {
  const menu = list.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <nav className="main">
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;
