import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      item: "",
      list: []
    };

    this.newTask = this.newTask.bind(this);
  }

  newItem(value) {
    this.setState({ item: value });
  }

  newTask() {
    this.setState({
      list: [...this.state.list, this.state.item],
      item: ""
    });
  }

  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />;
    });

    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <div>
          <input
            value={this.state.item}
            placeholder="Enter new task"
            onChange={e => this.newItem(e.target.value)}
          />
          <button onClick={this.newTask}>Add</button>
        </div>
        <br />
        {list}
      </div>
    );
  }
}

export default App;
