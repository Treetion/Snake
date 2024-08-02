import React from "react";
import "@/styles/components/Header.css";

const Header = ({ state, dispatch }) => {
  return (
    <div className="header">
      <div className="score"> Score: {state.score} </div>
      <div className="title"> SNAAAAAAKE!!!! </div>
      <div className="high-score"> High Score: {state.highScore} </div>
    </div>
  );
};

export default Header;
