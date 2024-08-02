import React from "react";
import getNewFood from "@/utils/getNewFood";

const startGame = (state, dispatch) => {
  // reset snake
  dispatch({
    type: "snake",
    data: [
      JSON.stringify([0, 0]),
      JSON.stringify([0, 1]),
      JSON.stringify([0, 2]),
    ],
  });
  // reset direction
  dispatch({ type: "direction", data: [0, 1] });
  // reset timer
  dispatch({ type: "reset timer" });
  // reset score
  dispatch({ type: "score", data: 0 });
  // get new food
  getNewFood(state.snake, dispatch);
  // set Running to true
  dispatch({ type: "start" });
};

export default startGame;
