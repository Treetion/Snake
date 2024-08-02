import React from "react";

const handleGameOver = (state, dispatch) => {
  dispatch({ type: "end" });
  if (state.score > state.highScore) {
    const newHighScore = state.score;
    dispatch({ type: "high score", data: newHighScore });
  }
};

export default handleGameOver;
