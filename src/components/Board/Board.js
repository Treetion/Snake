import React from "react";
import "@/styles/components/Board.css";
import Cell from "@/components/Board/Cell.js";
import GRID_SIZE from "@/utils/params.js";

const mapArr = Array(GRID_SIZE).fill(null);

const Board = ({ state, dispatch }) => {
  return (
    <div className="board">
      {mapArr.map((_, x) => (
        <div className="board-row" key={x}>
          {mapArr.map((_, y) => (
            <Cell key={`${x}-${y}`} x={x} y={y} state={state} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
