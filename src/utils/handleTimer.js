import React from "react";

const handleTimer = (running, dispatch) => {
  let timeoutId;
  if (running) {
    timeoutId = setTimeout(() => {
      dispatch({ type: "increment timer" });
    }, 500);
  } else {
    dispatch({ type: "reset timer" });
  }

  return timeoutId;
};

export default handleTimer;
