import React, { Component } from "react";
import "./App.css";
import Starter from "./component/Start.js";

class App extends Component {
  state = {
    person: [
      { name: "Cybercode2000", age: 5 },
      { name: "Iremide", age: 10 }
    ]
  };

  switchNameHandler = () => {
    alert("hello world");
  };

  changeName = e => {
    this.setState({
      person: [
        { name: e.target.value, age: this.state.person[0].age },
        { name: "Iremide", age: 10 }
      ]
    });
  };

  changeage = e => {
    this.setState({
      person: [
        { name: this.state.person[0].name, age: e.target.value },
        { name: "Iremide", age: 10 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <Starter
          change={this.changeName}
          changeAge={this.changeage}
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        ></Starter>
      </div>
    );
  }
}

export default App;
