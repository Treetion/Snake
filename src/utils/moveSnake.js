import React from "react";
import getNewFood from "@/utils/getNewFood";
import getNewSnakeHead from "@/utils/getNewSnakeHead";

const moveSnake = (state, dispatch) => {
  if (state.running && state.timer > 0) {
    const newHead = getNewSnakeHead(state);
    const food = JSON.stringify(state.food);
    const newSnake = [...state.snake];
    newSnake.push(newHead);

    if (newHead === food) {
      // If next cell is food
      dispatch({ type: "snake", data: newSnake });
      const newScore = state.score + 1;
      dispatch({ type: "score", data: newScore });
      getNewFood(state.snake, dispatch);
    } else {
      // If next cell is empty
      newSnake.shift();
      dispatch({ type: "snake", data: newSnake });
    }
  }
};

export default moveSnake;
