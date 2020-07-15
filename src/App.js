import React, { Component } from "react";
import "./App.css";
import Starter from "./component/Start.js";
import Radium from 'radium';

class App extends Component {
  state = {
    person: [
      { id: "bhcbhdbjhx", name: "Cybercode2000", age: 5 },
      { id: "hbjhbsdbjh", name: "Iremide", age: 10 },
      { id: "sbcjbdsjhbchjbd", name: "Cybercode", age: 10 },
      { id: "bjsbhdb", name: "Oluwadamilare", age: 30 }
    ],
    showPerson: false
  };

  switchNameHandler = () => {
    alert("hello world");
  };

  changeName = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.person[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState({
      person: persons
    });
  };

  changeage = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.person[personIndex]
    };

    person.age = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState({ person: persons });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({ person: persons });
  };

  toggle = e => {
    const checkStatus = this.state.showPerson;
    this.setState({
      showPerson: !checkStatus
    });
  };

  render() {
    let person = null;

    const style = {
      backgroundColor: "green",
      color: "white",
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.person.map((persons, index) => {
            return (
              <Starter
                click={() => this.deletePersonHandler(index)}
                name={persons.name}
                age={persons.age}
                key={persons.id}
                change={event => this.changeName(event, persons.id)}
                changeAge={event => this.changeage(event, persons.id)}
              ></Starter>
            );
          })}
        </div>
      );

      style[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black'
      }

      style.backgroundColor = "red";
      style.color = "black";

    }
    const classes = [];

    if (this.state.person.length <= 2) {
      classes.push("red");
    }

    if (this.state.person.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button style={style} onClick={this.toggle}>
          Switch here
        </button>
        <div>{person}</div>
      </div>
    );
  }
}

export default Radium(App);
