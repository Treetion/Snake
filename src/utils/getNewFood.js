import React from "react";
import GRID_SIZE from "@/utils/params";

const getNewFood = (snake, dispatch) => {
  if (snake.length < GRID_SIZE * GRID_SIZE) {
    const newFood = getNewFoodCoord(snake, GRID_SIZE);
    dispatch({ type: "food", data: newFood });
  } else {
    // If snake is filling up the entire grid, set food location to outside of board so it's not visible
    dispatch({ type: "food", data: [-1, -1] });
  }
};

const getNewFoodCoord = (snake, GRID_SIZE) => {
  const free_cells = [];
  for (let x = 0; x < GRID_SIZE; x++) {
    for (let y = 0; y < GRID_SIZE; y++) {
      const coords = JSON.stringify([x, y]);
      if (!snake.includes(coords)) {
        free_cells.push(coords);
      }
    }
  }

  const randInd = Math.floor(Math.random() * free_cells.length);
  const newFood = JSON.parse(free_cells[randInd]);
  return newFood;
};

export default getNewFood;
