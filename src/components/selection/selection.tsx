import React, { useState, useEffect } from "react";
import { GameChoices, GameItem } from "../../services/Game";
import { changeCSS } from "../../util";
import ChoiceButton from "../ChoiceButton";
import "./selection.scss";

type SelectionProps = {
  next: React.Dispatch<React.SetStateAction<GameChoices | undefined>>;
};

const Selection = ({ next }: SelectionProps) => {
  const [buttonSize] = useState<number>(160);
  useEffect(() => {
    changeCSS(".selection", "--button-size", buttonSize + "px");
  }, [buttonSize]);
  return (
    <div className="selection">
      {GameItem.map((item) => (
        <ChoiceButton choice={item} key={item} onClick={next} />
      ))}
      <img src="img/bg-pentagon.svg" alt="" />
    </div>
  );
};

export default Selection;
