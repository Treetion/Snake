import React from "react";
import GRID_SIZE from "./params";
import { jsx } from "react/jsx-runtime";

const stateReducer = (state, action) => {
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

    case "advance snake": {
      const head = JSON.parse(state.snake[state.snake.length - 1]);
      const newHead = [
        head[0] + state.direction[0],
        head[1] + state.direciton[1],
      ];
      const newSnake = [...state, JSON.stringify(newHead)];

      if (data && data === "eat") {
        return { ...state, snake: newSnake };
      } else {
        newSnake.shift();
        return { ...state, snake: newSnake };
      }
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

    case "set score": {
      if (typeof data === "number") {
        return { ...state, score: data };
      } else {
        warnInvalidAction();
        break;
      }
    }

    case "set high score": {
      if (typeof data === "number") {
        return { ...state, highScore: data };
      } else {
        warnInvalidAction();
        break;
      }
    }

    default: {
      warnInvalidAction();
    }
  }
};

const warnInvalidAction = (action) => {
  console.warn("Invalid dispatch action", action);
};

export default stateReducer;
