import React from "react";

import './ScoreBoard.css';

export const ScoreBoard = ({scores, xPlaying}) => {
    const {xScore, oScore} = scores;
    return <>
        <div className='scoreBoard'>
            <span className={`score x-score ${!xPlaying && 'inactive'}`}>X - {xScore}</span>
            <span className={`score o-score ${xPlaying && 'inactive'}`}>0 - {oScore}</span>
        </div>
    </>
}