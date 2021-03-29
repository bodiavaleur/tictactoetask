import React, { useState, useEffect } from "react";
import { useStatistics } from "../hooks/useStatistics";
import { useGameOver } from "../hooks/useGameOver";
import { PLAYER } from "../App";
import { GameUI } from "../ui/GameUI";
import { Board, BoardField } from "../ui/Board";
import { TextOptional, Title } from "../ui/Typography";
import { Statistics } from "../ui/Statistics";
import { GameOverButtons, GameOverUI } from "../ui/GameOverUI";
import { Button, ButtonLink } from "../ui/Button";

export function Game({ firstTurn }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(firstTurn);

  const statistics = useStatistics();
  const { result, resetGame } = useGameOver(board);

  useEffect(() => {
    if (result.winner) {
      statistics.updateWins(result.winner);
    }
  }, [result]);

  const handleTurnChange = (idx) => {
    // Prevent change of value if value already exist
    if (board[idx]) return;

    const newBoard = [...board];
    // Make turn
    newBoard[idx] = turn;
    // Change player
    setTurn(turn === PLAYER.FIRST ? PLAYER.SECOND : PLAYER.FIRST);
    // Update count of turns
    statistics.updateTurns();
    // Update board
    setBoard(newBoard);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setTurn(firstTurn);
    statistics.clearStats();
    resetGame();
  };

  const showStatistics = () => (
    <Statistics>
      <TextOptional>Turns: {statistics.turnsCount}</TextOptional>
      <TextOptional>
        Wins: ({PLAYER.FIRST}: {statistics.winsCount[PLAYER.FIRST]},{" "}
        {PLAYER.SECOND}: {statistics.winsCount[PLAYER.SECOND]})
      </TextOptional>
    </Statistics>
  );

  return result.draw || result.winner ? (
    <GameOverUI>
      {result.winner && <Title>WINNER: {result.winner}</Title>}
      {result.draw && <Title>GAME DRAW</Title>}
      {showStatistics()}
      <GameOverButtons>
        <ButtonLink to="/">New game</ButtonLink>
        <Button onClick={handleReset}>Play again</Button>
      </GameOverButtons>
    </GameOverUI>
  ) : (
    <GameUI>
      <Title>{turn}, now is your Turn</Title>

      <Board>
        {board.map((x, idx) => (
          <BoardField onClick={() => handleTurnChange(idx)}>{x}</BoardField>
        ))}
      </Board>

      {showStatistics()}
    </GameUI>
  );
}
