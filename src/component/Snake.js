import React, { Component } from 'react';
import './style/Snake.css';
import Board from './Board.js'

class Snake extends Component {
  constructor(props){
    super(props);
    this.state = {
      boardX: 30,
      boardY: 30,
      snakebody: [],
      direction: '',
      food: [],
      score: -1,
      tickrate: 100,
      ticks: 0,
      memory: [],
    };    
  }

  componentDidMount = () => {
    this.randomStart();
    this.makeFood();
    setInterval( ()=>{ this.setState({ ticks: this.state.ticks+1 }) } , this.state.tickrate )
  }

  randomStart = () => {
    let directions = ['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'];
    let directionStart = directions[ Math.floor(directions.length*Math.random()) ]

    let xStart = Math.floor(this.state.boardX * Math.random());
    let yStart = Math.floor(this.state.boardY * Math.random());

    this.setState({
      snakebody: [xStart, yStart],
      direction: directionStart,
    })
  }

  makeFood = () => {
    this.setState({
      food: [ Math.floor(this.state.boardX * Math.random()), Math.floor(this.state.boardY * Math.random()) ],
      score: this.state.score+1
    })
  }

  changeDirection = ( key ) => {
    if ((key === "ArrowLeft") && (this.state.direction === "ArrowRight")) {
      return;
    }
    if ((key === "ArrowUp") && (this.state.direction === "ArrowDown")) {
      return;
    }
    if ((key === "ArrowRight") && (this.state.direction === "ArrowLeft")) {
      return;
    }
    if ((key === "ArrowDown") && (this.state.direction === "ArrowUp")) {
      return;
    }
    this.setState({
      direction: key
    })
  }

  updatePos = (r,c) => {
    this.setState({
      snakebody: [r,c]
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
        <h1 className="SnakeHeader"><p className="headerInfo" id="gameTitleDisplay">SNEK</p><p className="headerInfo" id="gameScoreDisplay">score:{ this.state.score }</p><p className="headerInfo">ticks:{ this.state.ticks }</p></h1>
        <Board stateObj={this.state} snakePos={ (r,c) => this.updatePos(r,c) } control={ (ev) => this.keyChecker(ev) } regenFood={()=>this.makeFood() } id="gameBoard"/>
      </div>
    );
  }
}

export default Snake;