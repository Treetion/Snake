import React from "react";
import { useEffect, useReducer } from "react";
import "@/styles/App.css";
import reducer from "@/utils/reducer.js";
import handleTimer from "@/utils/handleTimer";
import moveSnake from "@/utils/moveSnake";
import addKeyDownListener from "@/utils/addKeyDownListener";
import handleGameOver from "@/utils/handleGameOver";
import checkIfGameOver from "@/utils/checkIfGameOver";
import Board from "@/components/board/board.js";
import Header from "@/components/Header.js";
import StartButton from "@/components/startButton.js";

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    timer: 0,
    running: false,
    direction: [0, 1],
    snake: [
      JSON.stringify([0, 0]),
      JSON.stringify([0, 1]),
      JSON.stringify([0, 2]),
    ],
    food: [-1, -1],
    score: 0,
    highScore: 0,
  });

  useEffect(() => {
    // Increments timer every second when game is running
    const timeoutId = handleTimer(state.running, dispatch);
    return () => clearTimeout(timeoutId);
  }, [state.timer, state.running]);

  useEffect(() => {
    // When game is running, check for game over conditions
    // End game if conditions are met
    // Move snake otherwise
    if (state.running) {
      const gameOver = checkIfGameOver(state);
      if (gameOver) {
        handleGameOver(state, dispatch);
      } else {
        moveSnake(state, dispatch);
      }
    }
  }, [state.timer]);

  useEffect(() => {
    // Handles keydown listener for arrow keys and changing directions
    if (state.running) {
      const removeListener = addKeyDownListener(dispatch, state.direction);
      return () => removeListener();
    }
  }, [state.timer, state.running]);

  useEffect(() => {
    // Checks for game over conditions, ends game if conditions are met
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
