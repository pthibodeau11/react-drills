import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";

class App extends Component {
  // constructor(){
  //   super();
  //   this.state = {

  //   }

  // }

  // stateless... doesn't take in values

  render() {
    return (
      <div className="App">
        <Image
          myImage={
            "https://images.unsplash.com/photo-1542601828-7ef7aca956b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          }
        />
      </div>
    );
  }
}

export default App;
