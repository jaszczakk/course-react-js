import React from "react";
import { Link } from "react-router-dom";
import Place from "../components/Place";

//jak sprawdzimy console.log props w PlacesPage to znajdziemy 3 obiekty: history, location, match
//w match mamy info o tym, czy ta ścieżka jest dokładnie taka sama i mamy też właściwość params,która
// pokazuje to co wpisaliśmy do URL ':id' w komponencie Page - i to sposob na pozyskanie tych informacji
//możemy więc tam gdzie wpisalibysmy props wpisujemy match i przekazujemy to id ( w komponencie Place
// użyjemy tych propsów id i wyświetlimy dzięki temu jaki to jest to artykuł)
const PlacesPage = ({ match }) => {
  return (
    <>
      <div>Wybrany region</div>
      <Place id={match.params.id} />
      <Link to="/co-zobaczyc">Powrót do listy regionów</Link>
    </>
  );
};

export default PlacesPage;
