import React from "react";
import { GameChoices } from "../../services/Game";
import "./choicebutton.scss";

type ChoiceButtonProp = {
  choice: GameChoices;
  onClick?: React.Dispatch<React.SetStateAction<GameChoices | undefined>>;
};

const Choicebutton = ({ choice, onClick }: ChoiceButtonProp) => {
  return <div 
  className="choicebutton" 
  title={choice} 
  onMouseUp={() => onClick?.(choice)}
  >
    <div className="inner">
      <img alt={choice} src={`/img/icon-${choice}.svg`} />
    </div>
    </div>;
};

export default Choicebutton;
