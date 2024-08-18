import React from 'react'
import Square from './Square'
export default function Board() {
  return (
    <div className='board-container'>
        <div className='board-row'>
            <Square />
            <Square />
            <Square />
        </div>
        <div className='board-row'>
            <Square />
            <Square />
            <Square />
        </div>
        <div className='board-row'>
            <Square />
            <Square />
            <Square />
        </div>
    </div>
  )
}
