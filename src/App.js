import React, { Component } from 'react';
import './App.css';
import { Card, CardTitle } from 'react-materialize';
var shuffle = require('shuffle-array');


class App extends Component {
  
  state = {
    images: [
      "./images/Eric-cartman.png",
      "./images/Butters.png",
      "./images/Jimmy_Vulmer.jpg",
      "./images/Mr_Garrison.jpg",
      "./images/Tweek.png",
      "./images/Timmy.png",
      "./images/Randy.png",
      "./images/Kenny.jpg",
      "./images/Mr_Mackey.png",
      "./images/stan_marsh.png",
      "./images/Kyle-broflovski.png",
      "./images/sheila_broflovski.jpg"
    ],
    clicked: [],
    score: 0,
    highScore: 0,
    correct: undefined,
    gameWon: false

  };




  

  
 

  
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
              {this.state.images.map((img) => {return <div className="col-3" id="comp"><Card onClick={() => shuffle(this.state.images)}><CardTitle image={img}/></Card></div>})}
            </div>
            
          </div>
      </div>
// onClick={() => props.clickHandler(props.image.imageName)}

        
      
    );
  }
}

export default App;
