import React from "react";
import { useEffect, useReducer } from "react";
import "./styles/app.css";
import stateReducer from "./utils/dispatch.js";

const App = () => {
  const [state, dispatch] = useReducer(stateReducer, {
    timer: 0,
    running: true,
    direction: [0, 1],
    snake: [JSON.stringify([0, 0]), JSON.stringify([0, 1])],
    food: "",
    score: 0,
    highScore: 0,
  });

  useEffect(() => {
    let timerId;
    if (state.running) {
      timerId = setTimeout(() => {
        dispatch({ type: "increment timer" });
      }, 1000);
    } else {
      dispatch({ type: "reset timer" });
    }

    return () => clearTimeout(timerId);
  }, [state.timer, state.running]);

  return <div className="container"> {state.timer} </div>;
};

export default App;
