import React from "react";
import "./App.css";
import Pokedex from "./Components/Pokedex";
import Characters from "./Characters";

function App() {
  return (
    <div className="App">
      <Pokedex characters={Characters} />
    </div>
  );
}

export default App;
