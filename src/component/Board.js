import React, { Component } from 'react';
import './style/Board.css';

class Board extends Component {
    // constructor(props){
    //     super(props);
    // }

    componentDidMount = () => {
        this.generateSnake();
    }

    generateSnake = () => {
        console.log(this.props.stateObj);
    }

    render(){
        this.boardGenerator = () => {
            let dimArray = [];
            for ( let i=0; i<this.props.stateObj.boardX; i++ ){
                dimArray.push([])
                for ( let j=0; j<this.props.stateObj.boardY; j++ ){
                    dimArray[i].push(j);
                }
            }
            return dimArray;
        }

        return (
            <div className="Board" tabIndex='0' onKeyDown={this.props.control}>
                {
                    this.boardGenerator().map( (row, rowIndex) => {
                        return <div key={rowIndex} className={rowIndex+' boardRow'}>
                            {
                                row.map( (col, colIndex) => {
                                    return <div key={colIndex} className={colIndex+' boardColumn'}></div>
                                } )
                            }
                        </div>
                    } )
                }
            </div>
        )
    }
}


export default Board;