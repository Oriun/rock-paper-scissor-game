import React, { useLayoutEffect, useState } from "react";
import "./rules.scss";

const Rules = () => {
  /** Rules Popup Management */
  const [rulesOpen, setRulesOpening] = useState<boolean>(false);
  useLayoutEffect(() => setRulesOpening(true), []);
  return (
    <footer
      className={rulesOpen ? "" : "hidden"}
      onClick={() => setRulesOpening(false)}
    >
      <div
        className="hidden-visible"
        onClick={(e) => {
          e.stopPropagation();
          setRulesOpening(true);
        }}
      >
        Rules
      </div>
      <div className="rule-content" onClick={(e) => e.stopPropagation()}>
        <div>
          <h2>Rules</h2>
          <img
            src="img/icon-close.svg"
            alt="close"
            onClick={() => setRulesOpening(false)}
          />
        </div>
        <img src="img/image-rules-bonus.svg" alt="rules" />
      </div>
    </footer>
  );
};

export default Rules;
