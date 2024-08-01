import React from "react";
import GRID_SIZE from "@/utils/params";
import getNewFood from "@/utils/getNewFood";

const moveSnake = (state, dispatch) => {
  if (state.running && state.timer > 0) {
    const head = JSON.parse(state.snake[state.snake.length - 1]);
    const newHead = JSON.stringify(
      wrapSnake(
        [head[0] + state.direction[0], head[1] + state.direction[1]],
        GRID_SIZE,
      ),
    );
    const food = JSON.stringify(state.food);

    if (state.snake.includes(newHead)) {
      // If next cell is snake
      // TODO: Make game over logic here
      dispatch({ type: "move", data: newHead });
      dispatch({ type: "shift" });
    } else if (newHead === food) {
      // If next cell is food
      dispatch({ type: "move", data: newHead });
      dispatch({ type: "increment score" });
      getNewFood(state.snake, dispatch);
    } else {
      // If next cell is empty
      dispatch({ type: "move", data: newHead });
      dispatch({ type: "shift" });
    }
  }
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

export default moveSnake;
