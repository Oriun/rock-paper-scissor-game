import React from "react";
import "./header.scss";

type HeaderProps = {
  score: number;
};

const Header = ({ score }: HeaderProps) => {
  return (
    <header>
      <img src="/img/logo.svg" alt="rock-paper-scissors logo" />
      <div className="score-box">
        <h4>score</h4>
        <strong>{score}</strong>
      </div>
    </header>
  );
};

export default Header;
