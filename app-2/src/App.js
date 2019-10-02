import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      drinks: ["diet coke", "beer", "coffee", "water"]
    };
  }

  render() {
    let drinksToDisplay = this.state.drinks.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });

    return <div className="App">{drinksToDisplay}</div>;
  }
}

export default App;
