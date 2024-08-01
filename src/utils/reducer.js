import React from "react";
import GRID_SIZE from "@/utils/params";

const reducer = (state, action) => {
  const type = action.type;
  const data = action.data ? action.data : null;

  switch (type) {
    case "increment timer": {
      const newTimer = state.timer + 1;
      return { ...state, timer: newTimer };
    }

    case "reset timer": {
      return { ...state, timer: 0 };
    }

    case "move": {
      if (data && typeof data === "string") {
        const newSnake = [...state.snake, data];
        return { ...state, snake: newSnake };
      } else {
        warnInvalidAction();
        break;
      }
    }

    case "shift": {
      const newSnake = [...state.snake];
      newSnake.shift();
      return { ...state, snake: newSnake };
    }

    case "change direction": {
      const dataStr = JSON.stringify(data);
      const possibleDirs = [
        JSON.stringify([0, 1]),
        JSON.stringify([0, -1]),
        JSON.stringify([1, 0]),
        JSON.stringify([-1, 0]),
      ];
      if (data && possibleDirs.includes(dataStr)) {
        return { ...state, direction: data };
      } else {
        warnInvalidAction();
        break;
      }
    }

    case "update food": {
      if (data && Array.isArray(data) && data.length === 2) {
        return { ...state, food: data };
      } else {
        warnInvalidAction();
        break;
      }
    }

    case "start": {
      return { ...state, running: true };
    }

    case "end": {
      return { ...state, running: false };
    }

    case "increment score": {
      const newScore = state.score + 1;
      return { ...state, score: newScore };
    }

    case "set high score": {
      if (typeof data === "number") {
        return { ...state, highScore: data };
      } else {
        warnInvalidAction();
        break;
      }
    }

    case "reset": {
      // Update food logic, make food an impossible big coord when resetting
      return {
        ...state,
        timer: 0,
        running: false,
        direction: [0, 1],
        snake: [JSON.stringify([0, 0]), JSON.stringify([0, 1])],
        food: [GRID_SIZE + 1, GRID_SIZE + 1],
        score: 0,
      };
    }

    default: {
      warnInvalidAction();
    }
  }
};

const warnInvalidAction = (action) => {
  console.warn("Invalid dispatch action", action);
};

export default reducer;
