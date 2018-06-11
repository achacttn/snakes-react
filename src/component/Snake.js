import React, { Component } from 'react';
import './style/Snake.css';
import Board from './Board.js'

class Snake extends Component {
  constructor(props){
    super(props);
    this.state = {
      boardX: 30,
      boardY: 30,
      head: [null,null],
      direction: '',
    };    
  }

  componentDidMount = () => {
    this.randomStart();
  }

  randomStart = () => {
    let directions = ['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'];
    let directionStart = directions[ Math.floor(directions.length*Math.random()) ]
    let xStart = Math.floor(this.state.boardX * Math.random());
    let yStart = Math.floor(this.state.boardY * Math.random());
    this.setState({
      head: [xStart, yStart],
      direction: directionStart
    })
  }

  changeDirection = ( key ) => {
    console.log( key );
    this.setState({
      direction: key
    })
  }

  keyChecker = (ev) => {
    if ( ev.key==='ArrowLeft' || ev.key==='ArrowRight' || ev.key==='ArrowUp' || ev.key==='ArrowDown' ){
      this.changeDirection( ev.key );
    }
  }

  render() {
    return (
      <div className="Snake">
        <h1 className="SnakeHeader">SNAKES</h1>
        <Board stateObj={this.state} control={ (ev) => this.keyChecker(ev) } id="test"/>
      </div>
    );
  }
}

export default Snake;