import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import { Game } from "./components/Game";
import { AppContent } from "./ui/AppContent";
import { NewGame } from "./components/NewGame";

export const PLAYER = {
  FIRST: "X",
  SECOND: "O",
};

export function App() {
  const [firstTurn, setFirstTurn] = useState(PLAYER.FIRST);

  const selectFirstTurn = ({ target }) => setFirstTurn(target.value);

  return (
    <Router>
      <GlobalStyle />
      <AppContent>
        <Route
          exact
          path="/"
          render={() => (
            <NewGame
              onTurnChange={selectFirstTurn}
              selectedPlayer={firstTurn}
            />
          )}
        />
        <Route path="/game" render={() => <Game firstTurn={firstTurn} />} />
      </AppContent>
    </Router>
  );
}
