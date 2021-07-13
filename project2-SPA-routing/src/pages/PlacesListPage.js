import React from "react";
import { Link } from "react-router-dom";
import "../styles/PlacesListPage.css";

const places = ["Jukatan", "Majorka", "Fuertaventura"];

const PlacesListPage = () => {
  const list = places.map((place) => (
    <li key={place}>
      <Link to={`/place/${place}`}>{place}</Link>
    </li>
  ));

  return (
    <div className="places">
      <h3>Wybierz region i sprawdź, co warto zobaczyć</h3>
      <div>
        <ul>{list}</ul>
      </div>
    </div>
  );
};

export default PlacesListPage;
