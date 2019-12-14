  
import React from "react";

import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import MovieList from "./Components/MovieList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SearchBar></SearchBar>
      <MovieList></MovieList>
    </div>
  );
}

export default App;