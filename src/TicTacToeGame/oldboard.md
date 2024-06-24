import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    if (state.every(cell => cell !== null)) {
      return 'Draw';
    }
    return false;
  };

  const isWinner = checkWinner();

  const handelClick = (index) => {
    if(state[index] !== null){
        return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  return (
    <div className="board-container">
      {isWinner ? (
        <> 
        <h3 style={{
            margin:"5px 5px",
            padding:"5px 18%",
            width:"320px",
            fontSize:"40px",
            color:"yellow",
            fontFamily:"sans-serif",
            textAlign:"center"
        }}>Yeh! {isWinner} won the game</h3>
        <button style={{
            border:"2px solid ",
            margin:"10px 30%",
            padding:"10px 20px",
            width:"200px",
            borderRadius:"10px",
            fontSize:"15px",
            background:"transparent"
        }}  onClick={() => setState(Array(9).fill(null))}>Play Again</button></>
      ) : (
        <>
        <h3 style={{
            margin:"5px 5px",
            padding:"5px 18%",
            width:"320px",
            fontSize:"25px",
            color:"yellow",
            fontFamily:"sans-serif",
            textAlign:"center"
        }}>Player {isXTurn ? "X" : "O"}, your turn</h3>
          <div className="board-row">
            <Square onClick={() => handelClick(0)} value={state[0]} />
            <Square onClick={() => handelClick(1)} value={state[1]} />
            <Square onClick={() => handelClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handelClick(3)} value={state[3]} />
            <Square onClick={() => handelClick(4)} value={state[4]} />
            <Square onClick={() => handelClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handelClick(6)} value={state[6]} />
            <Square onClick={() => handelClick(7)} value={state[7]} />
            <Square onClick={() => handelClick(8)} value={state[8]} />
          </div>
          <button style={{
            border:"2px solid ",
            margin:"10px 30%",
            padding:"10px 20px",
            width:"200px",
            borderRadius:"10px",
            fontSize:"15px",
            background:"transparent"
        }} 
        onClick={() => setState(Array(9).fill(null))}>Play Again</button>
        </>
      )
      }
    </div>
  );
};

export default Board;
