import React, { Component } from 'react';
import './App.css';
import Gameframe from "./components/gameframe/gameframe.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            South Park Clicky Game!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
          <div className="container">
            <div className="row">
                <Gameframe icon="./images/Eric-cartman.png"></Gameframe>
                <Gameframe icon="./images/Butters.png"></Gameframe>
                <Gameframe icon="./images/Jimmy_Vulmer.jpg"></Gameframe>
                <Gameframe icon="./images/Mr_Garrison.jpg"></Gameframe>
            </div>
            <div className="row">
                <Gameframe icon="./images/Tweek.png"></Gameframe>
                <Gameframe icon="./images/Timmy.png"></Gameframe>
                <Gameframe icon="./images/Randy.png"></Gameframe>
                <Gameframe icon="./images/Kenny.jpg"></Gameframe>
            </div>
            <div className="row">
                <Gameframe icon="./images/Mr_Mackey.png"></Gameframe>
                <Gameframe icon="./images/stan_marsh.png"></Gameframe>
                <Gameframe icon="./images/Kyle-broflovski.png"></Gameframe>
                <Gameframe icon="./images/sheila_broflovski.jpg"></Gameframe>
            </div>
          </div>
        
      </div>
    );
  }
}

export default App;
