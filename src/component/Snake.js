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
    };    
  }

  componentDidMount = () => {
    this.randomStart();
    this.makeFood();
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
    // let xFoodArr = Array.from({length: this.state.boardX}, (a,i)=> i!==this.state.snakebody[0]? i : (i+15)%this.state.boardX );
    // let xFood = Math.floor(xFoodArr.length*Math.random());

    // let yFoodArr = Array.from({length: this.state.boardY}, (a,i)=> i!==this.state.snakebody[1]? i : (i+15)%this.state.boardY );
    // let yFood = Math.floor(yFoodArr.length*Math.random());
    this.setState({
      // food: [xFood, yFood]
      food: [ Math.floor(this.state.boardX * Math.random()), Math.floor(this.state.boardY * Math.random()) ],
      score: this.state.score+1
    })
  }

  changeDirection = ( key ) => {
    console.log( key );
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
        <h1 className="SnakeHeader"><p className="headerInfo" id="gameTitleDisplay">SNEK</p><p className="headerInfo" id="gameScoreDisplay">score:{ this.state.score }</p></h1>
        <Board stateObj={this.state} snakePos={ (r,c) => this.updatePos(r,c) } control={ (ev) => this.keyChecker(ev) } regenFood={()=>this.makeFood() } id="gameBoard"/>
      </div>
    );
  }
}

export default Snake;