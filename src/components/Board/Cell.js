import React from "react";
import "@/styles/components/Cell.css";
import PropTypes from "prop-types";

const Cell = ({ x, y, state }) => {
  return <div className={getClass(x, y, state.snake, state.food)} />;
};

Cell.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  state: PropTypes.shape({
    snake: PropTypes.array.isRequired,
    food: PropTypes.array.isRequired,
  }).isRequired,
};

const getClass = (x, y, snake, food) => {
  const cellStr = JSON.stringify([x, y]);
  switch (true) {
    case cellStr === snake[snake.length - 1]: {
      return "board-cell board-cell--head";
    }
    case snake.includes(cellStr): {
      return "board-cell board-cell--body";
    }
    case cellStr === JSON.stringify(food): {
      return "board-cell board-cell--food";
    }
    default: {
      return "board-cell";
    }
  }
};

export default Cell;
