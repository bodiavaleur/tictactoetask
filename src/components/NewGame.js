import React from "react";
import { Link } from "react-router-dom";
import { PLAYER } from "../App";
import { NewGameUI, PlayerSelect } from "../ui/NewGameUI";
import { ButtonLink, ButtonRadio } from "../ui/Button";
import { Title } from "../ui/Typography";

export function NewGame({ onTurnChange, selectedPlayer }) {
  return (
    <NewGameUI>
      <Title>Select first player</Title>
      <PlayerSelect>
        <ButtonRadio
          htmlFor="playerX"
          selected={selectedPlayer === PLAYER.FIRST}
        >
          Play as X
          <input
            id="playerX"
            name="firstTurn"
            value={PLAYER.FIRST}
            type="radio"
            onChange={onTurnChange}
          />
        </ButtonRadio>
        <ButtonRadio
          htmlFor="playerO"
          selected={selectedPlayer === PLAYER.SECOND}
        >
          Play as O
          <input
            id="playerO"
            name="firstTurn"
            value={PLAYER.SECOND}
            type="radio"
            onChange={onTurnChange}
          />
        </ButtonRadio>
      </PlayerSelect>

      <ButtonLink to="/game">Start</ButtonLink>
    </NewGameUI>
  );
}
