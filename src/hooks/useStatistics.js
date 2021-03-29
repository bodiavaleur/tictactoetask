import { useState, useEffect } from "react";
import { PLAYER } from "../App";

export function useStatistics() {
  const [turnsCount, setTurnsCount] = useState(0);
  const [winsCount, setWinsCount] = useState({
    [PLAYER.FIRST]: 0,
    [PLAYER.SECOND]: 0,
  });

  useEffect(() => {}, []);

  const clearStats = () => setTurnsCount(0);
  const updateTurns = () => setTurnsCount((prevCount) => prevCount + 1);
  const updateWins = (player) =>
    setWinsCount({ ...winsCount, [player]: winsCount[player] + 1 });

  return { turnsCount, winsCount, updateTurns, updateWins, clearStats };
}
