import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

//instalacja React Router jest po to aby przy likach  nie odświeżała się strona
//w terminalu: npm install react-router-dom, a potem musimy zaimportować tj wyżej
//{BrowserRouter} - komponent podstawowy , który sprawuje kontrole nad wszystkim,
//owijamy głowny komponent nim, ale może mieć on tylko jedno dziecko, w tym przypadku to div
//Możemy sobie skrócić nazwę i używać niżej w komponentach samą Router a nie BrowserRouter poprzez:
//BrowserRouter as Router
//{Link} - komponent do zastąpienia komponentu <a></a>
//{Route} - komponent, najpierw podajemy ścieżkę i jeśli jest określona ścieżka to wyświetl component={}
//Route - warunkowo wyświetla nam jakiś inny komponent(nasz), sprawdza czy path jest zgodne
//{Navlink}taki jak Link, ale ma dodatkowe elementy, możemy sprawdzić dzięki Navlink URL i poprzez to doda się klasa
//do aktywnego komponentu-klase active bądź taka jak sami okreslimy,np.activeClassName="home_selected" (w zwykłym Linku tego nie mamy)
//{Switch} - do obslugi błednego URL , pełni rolę opakowania dla naszych Route, dzięki Switch wykona się
//maksymalnie jeden komponent Route, a nie po kolei wszystkie

const Home = () => {
  // console.log("renderuje");
  return <h1>Strona startowa</h1>;
};
const News = () => <h1>Aktualności</h1>;
const Contact = () => <h1>Kontakt do nas</h1>;

//obsługa błędów w URL - jeśli wpiszemy URL który nie istnieje
const ErrorPage = () => <h1>Strona nie istnieje</h1>;
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <nav>
              <ul>
                {/* <li><a href="/">Start</a></li>
                <li><a href="/news">Aktualności</a></li>
                <li><a href="/contact">Kontakt</a></li> */}
                <li>
                  <NavLink
                    to="/"
                    exact
                    activeClassName="home_selected"
                    //klasa i style dodane liniowo, activeStyle- jest już wpisane i można używac
                    activeStyle={{
                      backgroundColor: "gray",
                      letterSpacing: "6px",
                    }}
                  >
                    Start
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/news" activeClassName="news_selected">
                    Aktualności
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" activeClassName="contact_selected">
                    Kontakt
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <section>
            {/* ta kolejność ma znaczenie, bo najpierw sprawdza się ten pierwszy Route, czy "/"to prawda
            jeśli tak to idzie dalej i sprawdze czy jest /news itd. 
            jeśli uzyjemy atrybutu exact to oznacza, że ma być dokladnie takie jak.. czyli wyswietli się
            tylko component Home, a klikajac na news lub contact- tylko one już bez komponentu Home*/}
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/news" component={News} />
              <Route path="/contact" component={Contact} />
              <Route component={ErrorPage} />
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
