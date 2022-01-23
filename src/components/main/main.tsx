import React, { useCallback, useState } from "react";
import { GameChoices } from "../../services/Game";
import Result from "../result";
import Selection from "../selection";
import "./main.scss";

type MainProps = {
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

const Main = ({ setScore }: MainProps) => {
  const [choice, setChoice] = useState<GameChoices>();

  const Component: React.FC<any> = useCallback(() => {
    if (choice) return <Result next={()=>setChoice(undefined)} choice={choice} setScore={setScore} />;
    else return <Selection next={setChoice} />;
  }, [choice, setChoice, setScore]);

  return (
    <main>
      <Component />
    </main>
  );
};

export default Main;
