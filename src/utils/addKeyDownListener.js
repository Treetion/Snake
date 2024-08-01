import React from "react";

const addKeyDownListener = (dispatch, direction) => {
  const keyDownHandler = createKeyDownHandler(dispatch, direction);
  document.addEventListener("keydown", keyDownHandler);
  return () => document.removeEventListener("keydown", keyDownHandler);
};

const createKeyDownHandler = (dispatch, direction) => {
  return (e) => {
    const keyCode = e.keyCode;
    const dirStr = JSON.stringify(direction);
    let newDir = [];
    let opposite = "";

    switch (keyCode) {
      case 37: {
        newDir = [0, -1];
        opposite = JSON.stringify([0, 1]);
        break;
      }
      case 38: {
        newDir = [-1, 0];
        opposite = JSON.stringify([1, 0]);
        break;
      }
      case 39: {
        newDir = [0, 1];
        opposite = JSON.stringify([0, -1]);
        break;
      }
      case 40: {
        newDir = [1, 0];
        opposite = JSON.stringify([-1, 0]);
        break;
      }
    }

    if (newDir.length === 2 && opposite !== dirStr) {
      dispatch({ type: "change direction", data: newDir });
    }
  };
};

export default addKeyDownListener;
