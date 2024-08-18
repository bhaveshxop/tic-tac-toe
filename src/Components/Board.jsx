import React, { useState } from 'react';
import Square from './Square';

export default function Board() 
{
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    console.log("state", state);

    const handleClick = (index) => 
    {
        if (state[index] != null ) return; 
        const copyState = [...state];
        copyState[index] = isXTurn ? 'X' : 'O';
        setState(copyState);
        setIsXTurn(!isXTurn);
        console.log("Clicked on index :", index);
    };

    const checkWinner = () => 
    {
        const winStates = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < winStates.length; i++) {
            const [a, b, c] = winStates[i];
            if (state[a] != null && state[a] === state[b] && state[a] === state[c]) 
            {
                return state[a];
            }
        }
        return null;
    };


    let isBoardFull = true;
    for (let i = 0; i < state.length; i++) 
    {
        if (state[i] === null) 
        {
            isBoardFull = false;
            break;
        }
    }

    const winner = checkWinner();
    const isDraw = isBoardFull && !winner; 

    return (
        <div className='board-container'>
            {winner ? (
                <>
                    <h1>Winner is {winner}</h1>
                    <button onClick={() => setState(Array(9).fill(null))}>Play Again</button>
                </>
            ) : isDraw ? (
                <>
                    <h1>It's a draw! Winner is no one</h1>
                    <button onClick={() => setState(Array(9).fill(null))}>Play Again</button>
                </>
            ) : (
                <>
                    <h1>{isXTurn ? 'X' : 'O'}'s Turn</h1>
                    <div className='board-row'>
                        <Square onClick={() => handleClick(0)} value={state[0]} />
                        <Square onClick={() => handleClick(1)} value={state[1]} />
                        <Square onClick={() => handleClick(2)} value={state[2]} />
                    </div>
                    <div className='board-row'>
                        <Square onClick={() => handleClick(3)} value={state[3]} />
                        <Square onClick={() => handleClick(4)} value={state[4]} />
                        <Square onClick={() => handleClick(5)} value={state[5]} />
                    </div>
                    <div className='board-row'>
                        <Square onClick={() => handleClick(6)} value={state[6]} />
                        <Square onClick={() => handleClick(7)} value={state[7]} />
                        <Square onClick={() => handleClick(8)} value={state[8]} />
                    </div>
                </>
            )}
        </div>
    );
}
