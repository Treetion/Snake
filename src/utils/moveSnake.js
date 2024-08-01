import React from "react";

const moveSnake = (running, timer, dispatch) => {
  // Handle logic of eating and game losing here
  if (running && timer > 0) {
    dispatch({ type: "move snake" });
  }
};

export default moveSnake;
