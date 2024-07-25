import React, { useState } from 'react';

export default function TicTacToe() {
  const [turn, setTurn] = useState('X');
  const [cells, setCells] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState();
  const [isDraw, setIsDraw] = useState(false);

  const checkWinner = (arr) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          arr[pattern[0]] === '' ||
          arr[pattern[1]] === '' ||
          arr[pattern[2]] === ''
        ) {
        } else if (
          arr[pattern[0]] === arr[pattern[1]] &&
          arr[pattern[1]] === arr[pattern[2]]
        ) {
          setWinner(arr[pattern[0]]);
        }
      });
    }
  };

  const handleClick = (num) => {
    if (winner || cells[num] !== '') return;

    let arr = [...cells];
    if (turn === 'X') {
      arr[num] = 'X';
      setTurn('O');
    } else {
      arr[num] = 'O';
      setTurn('X');
    }
    checkWinner(arr);
    setCells(arr);
    if (!arr.includes('') && !winner) {
      setIsDraw(true);
    }
  };

  const Cell = ({ num }) => {
    const cellValue = cells[num];
    const cellClassName = `w-16 h-16 border border-gray-400 text-center text-2xl font-bold ${cellValue === 'X' ? 'text-red-500' : 'text-blue-500'}`;

    return (
      <td className={`${cellClassName} bg-[#17191A] rounded-md`} onClick={() => handleClick(num)}>
        {cellValue}
      </td>
    );
  };

  const handleReset = () => {
    setWinner();
    setIsDraw(false);
    setCells(Array(9).fill(''));
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-[#17191A] text-[#E5E5E5]'>
      <div className={`mb-4 text-xl font-bold ${winner || isDraw ? 'block' : 'hidden'}`}>
        {winner ? `Winner is: ${winner}` : isDraw ? `It's a draw` : ''}
      </div>
      <table className='border-collapse'>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      <button className='text-[#E5E5E5] border-2 hover:bg-[#0099CC] hover:border-[#0099CC] px-4 py-3 mt-4 mx-auto flex items-center rounded-md' onClick={handleReset}>
        Reset
      </button>
      <div className="p-4 text-center text-sm text-gray-400">
        Tic-Tac-Toe game by <br/>
        <a
          href="https://dev.to/kartikbudhraja/building-a-simple-tic-tac-toe-game-with-react-4bdj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0099CC] hover:underline">
          Kartik Budhraja
        </a>
      </div>
    </div>
  );
}
