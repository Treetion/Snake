import React from "react";
import GRID_SIZE from "@/utils/params";

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

    case "move snake": {
      const head = JSON.parse(state.snake[state.snake.length - 1]);
      const newHead = wrapSnake(
        [head[0] + state.direction[0], head[1] + state.direction[1]],
        GRID_SIZE,
      );
      const newSnake = [...state.snake, JSON.stringify(newHead)];

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

    case "reset": {
      // Update food logic, make food an impossible big coord when resetting
      return {
        ...state,
        timer: 0,
        running: false,
        direction: [0, 1],
        snake: [JSON.stringify([0, 0]), JSON.stringify([0, 1])],
        food: [2, 5],
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

export default stateReducer;
