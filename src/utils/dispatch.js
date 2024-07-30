import React from "react";

const stateReducer = (state, action) => {
  switch (action.type) {
    case "increment timer": {
      const newTimer = state.timer + 1;
      return { ...state, timer: newTimer };
    }
    case "reset timer": {
      return { ...state, timer: 0 };
    }
    case "advance snake": {
      //TODO
      return { ...state };
    }
    case "change direction": {
      const newDir = changeDirection(action.data);
      return newDir ? { ...state, direction: newDir } : { ...state };
    }
    case "make food": {
      //TODO
      return { ...state };
    }
    case "start": {
      return { ...state, running: true };
    }
    case "end": {
      return { ...state, running: false };
    }
  }
};

const changeDirection = (dir) => {
  switch (dir) {
    case "ArrowUp": {
      return [-1, 0];
    }
    case "ArrowDown": {
      return [1, 0];
    }
    case "ArrowLeft": {
      return [0, -1];
    }
    case "ArrowRight": {
      return [0, 1];
    }
    default: {
      return null;
    }
  }
};

export default stateReducer;
