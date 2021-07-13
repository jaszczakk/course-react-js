import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "../pages/HomePage";
import PlacesPage from "../pages/PlacesPage";
import PlacesListPage from "../pages/PlacesListPage";
import FoodPage from "../pages/FoodPage";
import ShoppingPage from "../pages/ShoppingPage";
import ErrorPage from "../pages/ErrorPage";
import ContactPage from "../pages/ContactPage";
import AdminPage from "../pages/AdminPage";
import LoginPage from "../pages/LoginPage";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/co-zobaczyc" component={PlacesListPage} />
        <Route path="/place/:id" component={PlacesPage} />
        <Route path="/co-zjesc" component={FoodPage} />
        <Route path="/co-kupic" component={ShoppingPage} />
        <Route path="/kontakt" component={ContactPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page;
