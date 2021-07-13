import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";
import Page from "./Page";
import Navigation from "./Navigation";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>{<Header />}</header>
          <main>
            <aside>{<Navigation />}</aside>
            <section className="blog">{<Page />}</section>
          </main>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;
