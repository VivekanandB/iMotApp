import React, { Component } from 'react';
import './quote/Quote.css';
import Quote from './quote/Quote.js';
import Particles from 'react-particles-js';
import './App.css';


const particlesOptions = {
  "particles": {
          "number": {
              "value": 1100,
              "density": {
                  "enable": false
              }
          },
          "size": {
              "value": 3,
              "random": true,
              "anim": {
                  "speed": 4,
                  "size_min": 0.3
              }
          },
          "line_linked": {
              "enable": false
          },
          "move": {
              "random": true,
              "speed": 1,
              "direction": "top",
              "out_mode": "out"
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "bubble"
              },
              "onclick": {
                  "enable": true,
                  "mode": "repulse"
              }
          },
          "modes": {
              "bubble": {
                  "distance": 250,
                  "duration": 2,
                  "size": 0,
                  "opacity": 0
              },
              "repulse": {
                  "distance": 400,
                  "duration": 4
              }
          }
      }
}




class App extends Component {
  render() {
    return (
      <div>

  
      {/*<Particles className='particles'
             params={particlesOptions}/>    */}
             <Particles className='particles'
             params={particlesOptions}/>
      <Quote/>

    </div>
    );
  }
}

export default App;
