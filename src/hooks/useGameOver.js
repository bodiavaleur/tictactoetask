import { useState, useEffect } from "react";

const winTurns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function useGameOver(board) {
  const [result, setResult] = useState({ winner: null, draw: false });

  useEffect(() => {
    const winner = winTurns.find((winTurn) => {
      // Check if fields are not empty and if they match win combination
      if (
        board[winTurn[0]] &&
        board[winTurn[1]] &&
        board[winTurn[2]] &&
        board[winTurn[0]] === board[winTurn[1]] &&
        board[winTurn[1]] === board[winTurn[2]]
      ) {
        setResult({ winner: board[winTurn[0]], draw: false });
        return winTurn;
      }
    });

    // Check if board is empty
    const isBoardEmpty = board.filter((field) => Boolean(field)).length === 9;
    // Check if board is full and still no winner
    if (!winner && isBoardEmpty) {
      setResult({ winner: null, draw: true });
    }
  }, [board]);

  const resetGame = () => setResult({ winner: null, draw: false });

  return { result, resetGame };
}
