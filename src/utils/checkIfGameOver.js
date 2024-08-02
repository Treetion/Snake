import React from "react";
import GRID_SIZE from "@/utils/params";
import getNewSnakeHead from "@/utils/getNewSnakeHead";

const checkIfGameOver = (state) => {
  if (state.snake.length === GRID_SIZE * GRID_SIZE) {
    return true;
  } else if (state.snake.includes(getNewSnakeHead(state))) {
    return true;
  } else {
    return false;
  }
};

export default checkIfGameOver;
