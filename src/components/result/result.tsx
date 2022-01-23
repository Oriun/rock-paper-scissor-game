import React, { useState, useEffect, useRef } from "react";
import { GameChoices, computerChoice, spare } from "../../services/Game";
import { changeCSS } from "../../util";
import ChoiceButton from "../ChoiceButton";
import "./result.scss";

type ResultProps = {
  choice: GameChoices;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  next: () => void;
};
const resultPhrase = {
  "-1": "You lose",
  0: "It's a draw",
  1: "You win",
};
const Result = ({ choice, setScore, next }: ResultProps) => {
  const [buttonSize, setButtonSize] = useState<number>(300);
  useEffect(() => {
    changeCSS(".result", "--button-size", buttonSize + "px");
  }, [buttonSize]);

  const [houseChoice, setHouseChoice] = useState<GameChoices>();
  const resultRef = useRef<string>("");
  useEffect(() => {
    let timeout = setTimeout(() => {
      const ch = computerChoice(),
        res = spare(choice, ch);
      resultRef.current = resultPhrase[res];
      setScore((a) => a + res);
      setHouseChoice(ch);
    }, 2_000);
    return () => clearTimeout(timeout);
  }, []);

  let House = (
    <div className="waiting-choice">
      <div />
    </div>
  );
  let Text = <></>;

  if (houseChoice) {
    House = <ChoiceButton choice={houseChoice} />;
    Text = (
      <div>
        <h2>{resultRef.current}</h2>
        <button onClick={()=>next()}>Play again</button>
      </div>
    );
  }

  return (
    <div className="result">
      <div className="column">
        <h2>You picked</h2>
        <ChoiceButton choice={choice} />
      </div>
      <div className="space">{Text}</div>
      <div className="column">
        <h2>The house picked</h2>
        {House}
      </div>
    </div>
  );
};

export default Result;
