import React, { useState } from 'react';
import Square from './Square';


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

  const handleClick = (index) => {
    if (state[index] !== null || isWinner) {
      return;
    }
    const newState = [...state];
    newState[index] = isXTurn ? 'X' : 'O';
    setState(newState);
    setIsXTurn(!isXTurn);
  };

  return (
    <div className="board-container">
      {isWinner ? (
        <> 
          <h3 style={styles.message}>
            {isWinner === 'Draw' ? 'It\'s a Draw!' : `Yeh! ${isWinner} won the game`}
          </h3>
          <button style={styles.button} onClick={() => {
            setState(Array(9).fill(null));
            setIsXTurn(true);
          }}>Play Again</button>
        </>
      ) : (
        <>
          <h3 style={styles.message}>Player {isXTurn ? 'X' : 'O'}, your turn</h3>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
          <button style={styles.button} onClick={() => {
            setState(Array(9).fill(null));
            setIsXTurn(true);
          }}>Play Again</button>
        </>
      )}
    </div>
  );
};

const styles = {
  message: {
    margin: '5px 5px',
    padding: '5px 18%',
    width: '320px',
    fontSize: '25px',
    color: 'yellow',
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
  button: {
    border: '2px solid',
    margin: '10px 30%',
    padding: '10px 20px',
    width: '200px',
    borderRadius: '10px',
    fontSize: '15px',
    background: 'transparent',
  },
  board: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 100px)',
    gridTemplateRows: 'repeat(3, 100px)',
    gap: '5px',
  },
};

export default Board;
