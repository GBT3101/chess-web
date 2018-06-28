import React, { Component } from 'react';
import './Board.css'

export default class Board extends Component {

    render() {
        return (
        <div className="board-container">
            {this.getDivs()}
        </div>)
    }

    getDivs() {
        let divs = []
        for(let i = 0; i < 64; i++) {
            divs.push(i % 16 < 8 ? <div id={i} className={i % 2 === 0 ? "black-square" : "white-square"}> </div> 
                                 : <div id={i} className={i % 2 !== 0 ? "black-square" : "white-square"}> </div>)
        }
        return divs;
    }
}
