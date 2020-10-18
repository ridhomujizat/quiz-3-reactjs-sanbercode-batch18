import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../Home";
import DaftarFilm from "../DaftarFilm/DaftarFilm";
import Login from "../Login";
import About from "../About";
export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/daftarFilm">
            <DaftarFilm />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
