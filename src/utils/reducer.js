import React from "react";

const reducer = (state, action) => {
  const type = action.type;
  const data = action.data;

  switch (type) {
    case "increment timer": {
      const newTimer = state.timer + 1;
      return { ...state, timer: newTimer };
    }

    case "reset timer": {
      return { ...state, timer: 0 };
    }

    case "snake": {
      if (Array.isArray(data)) {
        return { ...state, snake: data };
      } else {
        warnInvalidAction(action);
        break;
      }
    }

    case "direction": {
      const dataStr = JSON.stringify(data);
      const possibleDirs = [
        JSON.stringify([0, 1]),
        JSON.stringify([0, -1]),
        JSON.stringify([1, 0]),
        JSON.stringify([-1, 0]),
      ];
      if (possibleDirs.includes(dataStr)) {
        return { ...state, direction: data };
      } else {
        warnInvalidAction(action);
        break;
      }
    }

    case "food": {
      if (Array.isArray(data) && data.length === 2) {
        return { ...state, food: data };
      } else {
        warnInvalidAction(action);
        break;
      }
    }

    case "start": {
      return { ...state, running: true, gameOver: false };
    }

    case "end": {
      return { ...state, running: false, gameOver: true };
    }

    case "score": {
      if (typeof data === "number") {
        return { ...state, score: data };
      } else {
        warnInvalidAction(action);
        break;
      }
    }

    case "high score": {
      if (typeof data === "number") {
        return { ...state, highScore: data };
      } else {
        warnInvalidAction(action);
        break;
      }
    }

    default: {
      warnInvalidAction(action);
    }
  }
};

const warnInvalidAction = (action) => {
  console.warn("Invalid dispatch action", action);
};

export default reducer;
