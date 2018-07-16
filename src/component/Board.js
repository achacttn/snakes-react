import React, { PureComponent } from 'react';
import './style/Board.css';

class Board extends PureComponent {
    // constructor(props){
    //     super(props);
    // }

    componentDidMount = () => {
        this.testProps();
    }

    testProps = () => {
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

        this.generateSnake = (r, c) => {
            var pos = this.props.stateObj.snakebody;
            var classToggle = 'boardColumn'
            if( r === pos[0] && c === pos[1] ){
                return classToggle + ' snakeBody'
            } else {
                return classToggle;
            }
        }

        return (
            <div className="Board" tabIndex='0' onKeyDown={this.props.control}>
                {
                    this.boardGenerator().map( (row, rowIndex) => {
                        return (
                            <div key={rowIndex} className={'boardRow'}>
                                {
                                    row.map( (col, colIndex) => {
                                        return <div key={colIndex} className=
                                        {
                                            this.generateSnake(rowIndex, colIndex)
                                        }
                                        ></div>
                                    } )
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


export default Board;