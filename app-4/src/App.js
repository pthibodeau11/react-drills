import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };

    this.login = this.login.bind(this);
  }

  saveUser(name) {
    this.setState({ username: name });
  }

  savePass(pass) {
    this.setState({ password: pass });
  }

  login() {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }

  render() {
    return (
      <div className="App">
        <input
          className="UserName"
          onChange={e => this.saveUser(e.target.value)}
          type="text"
        />
        <input
          className="Password"
          onChange={e => this.savePass(e.target.value)}
          type="text"
        />
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default App;
