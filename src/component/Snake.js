import React, { Component } from 'react';
import './style/Snake.css';
import Board from './Board.js'

class Snake extends Component {
  constructor(props){
    super(props);
    this.state = {
      boardX: 50,
      boardY: 50,
    };    
  }

  render() {
    return (
      <div className="Snake">
        <h1 className="SnakeHeader">SNAKES</h1>
        <Board stateObj={this.state} />
      </div>
    );
  }
}

export default Snake;