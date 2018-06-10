import React, { Component } from 'react';
import './style/Board.css';

class Board extends Component {
    constructor(props){
        super(props);

        console.log(this.props);
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
            console.log( dimArray );
            return dimArray
        }

        return (
            <div className="Board">
                {
                    this.boardGenerator().map( (row, rowIndex) => {
                        return <div key={rowIndex} className={rowIndex}>
                            {
                                row.map( (col, colIndex) => {
                                    return <span key={colIndex} className={colIndex}> A </span>
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