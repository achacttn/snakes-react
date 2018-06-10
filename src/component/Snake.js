import React, { Component } from 'react';
import './style/Snake.css';
import Board from './Board.js'

class Snake extends Component {
  constructor(){
    super();
    this.state = {
      board: {x:50, y:50},
    }
  }

  render() {
    return (
      <div className="Snake">
        <h1 className="SnakeHeader">Snake in react</h1>
        <Board />
      </div>
    );
  }
}

export default Snake;