import React from "react";
import { useEffect, useReducer } from "react";
import "@/styles/app.css";
import reducer from "@/utils/reducer.js";
import handleTimer from "@/utils/handleTimer";
import moveSnake from "@/utils/moveSnake";
import addKeyDownListener from "@/utils/addKeyDownListener";
import Board from "@/components/board/board.js";
import Header from "@/components/Header.js";
import StartButton from "@/components/startButton.js";

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    timer: 0,
    running: true,
    gameOver: false,
    direction: [0, 1],
    snake: [
      JSON.stringify([0, 0]),
      JSON.stringify([0, 1]),
      JSON.stringify([0, 2]),
    ],
    food: [2, 5],
    score: 0,
    highScore: 0,
  });

  useEffect(() => {
    // Increments timer every second when game is running
    const timeoutId = handleTimer(state.running, dispatch);
    return () => clearTimeout(timeoutId);
  }, [state.timer, state.running]);

  useEffect(() => {
    // Handles snaking moving every second when game is running
    moveSnake(state, dispatch);
  }, [state.timer]);

  useEffect(() => {
    // Handles keydown listener for arrow keys and changing directions
    const removeListener = addKeyDownListener(dispatch, state.direction);
    return () => removeListener();
  }, [state.timer]);

  return (
    <div className="container">
      <Header state={state} dispatch={dispatch} />
      <Board state={state} dispatch={dispatch} />
      <StartButton state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
