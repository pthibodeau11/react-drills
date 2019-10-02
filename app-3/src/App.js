import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterString: "",
      drinks: ["diet coke", 
                "beer", 
                "coffee", 
                "water"]
    };
  }

  filterList(filter) {
    this.setState({ filterString: filter });
  }

  render() {
    let drinksToDisplay = this.state.drinks
      .filter((element, index) => {
        return element.includes(this.state.filterString);
      })
      .map((element, index) => {            //return value that is changed
        return <h2 key={index}>{element}</h2>;  //its a way to identify that each element is unique
      });

    return (
      <div>
        <input
          className="Filter"
          onChange={e => this.filterList(e.target.value)}
          type="text"
        ></input>
        {drinksToDisplay}
      </div>
    );
  }
}

export default App;
