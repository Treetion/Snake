import React from "react";
import "@/styles/components/StartButton.css";
import startGame from "@/utils/startGame";
import handleGameOver from "@/utils/handleGameOver";

const StartButton = ({ state, dispatch }) => {
  if (!state.running) {
    return (
      <button
        className="start-button"
        onClick={() => startGame(state, dispatch)}
      >
        Start New Game
      </button>
    );
  } else {
    return (
      <button
        className="start-button"
        onClick={() => handleGameOver(state, dispatch)}
      >
        End Game
      </button>
    );
  }
};

export default StartButton;
