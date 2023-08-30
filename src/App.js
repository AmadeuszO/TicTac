import React, {useState} from "react";
import {Board} from "./component/Board";
import {ScoreBoard} from "./component/ScoreBoard";

import './App.css';

export const App = () => {

    const WIN = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    const [board, setBoard] = useState([].fill(null));
    const [xPlaying, setXPlaying] = useState(true);
    const [scores, setScores] = useState({xScore: 0, oScore: 0})
    const [gameOver, setGameOver] = useState(false)

    const handleBoxClick = (boxId) => {
        const updatedBoard = board.map((value, index) => {
            if (index === boxId) {
                return xPlaying === true ? 'X' : 'O'
            } else {
                return value;
            }
        })

        const winner = checkWinner(updatedBoard);

        if (winner) {
            if (winner === "0") {
                let {oScore} = scores;
                oScore += 1
                setScores({...scores, oScore})
            } else {
                let {xScore} = scores;
                xScore += 1
                setScores({...scores, xScore})
            }
        }

        setBoard(updatedBoard);
        setXPlaying(!xPlaying);
    }

    const checkWinner = (board) => {
        for (let i = 0; i < WIN.length; i++) {
            const [x, y, z] = WIN[i];
            if (board[x] && board[x] === board[y] && board[y] === board[z]) {
                setGameOver(true);
                return board[x];
            }
        }
    }

    const resetBoard = () => {
        setGameOver(false);
        setBoard(Array(9).fill(null))
    }

    return <>
        <div className="App">
            <ScoreBoard scores={scores} xPlaying={xPlaying}/>
            <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick}/>
            <ResetButton resetBoard={resetBoard}/>
        </div>
    </>
}
