import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import MovieList from "./Components/MovieList";
import MovieDetail from "./Components/MovieDetail";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <SearchBar />
            <MovieList />
          </Route>
          <Route path="/detay">
            <MovieDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;