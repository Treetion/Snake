import React from "react";
import GRID_SIZE from "@/utils/params";

const getNewFood = (snake, dispatch) => {
  if (snake.length < GRID_SIZE * GRID_SIZE) {
    const free_cells = getFreeCells(snake, GRID_SIZE);
    const randInd = Math.floor(Math.random() * free_cells.length);
    const newFood = JSON.parse(free_cells[randInd]);
    dispatch({ type: "update food", data: newFood });
  } else {
    dispatch({ type: "update food", data: [GRID_SIZE + 1, GRID_SIZE + 1] });
  }
};

const getFreeCells = (snake, GRID_SIZE) => {
  const free_cells = [];
  for (let x = 0; x < GRID_SIZE; x++) {
    for (let y = 0; y < GRID_SIZE; y++) {
      const coords = JSON.stringify([x, y]);
      if (!snake.includes(coords)) {
        free_cells.push(coords);
      }
    }
  }

  return free_cells;
};

export default getNewFood;
