import React from "react";
import GRID_SIZE from "@/utils/params";

const getNewSnakeHead = (state) => {
  const head = JSON.parse(state.snake[state.snake.length - 1]);
  const newHead = JSON.stringify(
    wrapSnake(
      [head[0] + state.direction[0], head[1] + state.direction[1]],
      GRID_SIZE,
    ),
  );
  return newHead;
};

const wrapSnake = (head, GRID_SIZE) => {
  if (head[0] === GRID_SIZE) {
    return [0, head[1]];
  } else if (head[1] === GRID_SIZE) {
    return [head[0], 0];
  } else if (head[0] === -1) {
    return [GRID_SIZE - 1, head[1]];
  } else if (head[1] === -1) {
    return [head[0], GRID_SIZE - 1];
  } else {
    return head;
  }
};

export default getNewSnakeHead;
