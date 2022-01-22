import React, { useLayoutEffect, useState } from 'react';
import './rules.scss'


const Rules = () => {
    /** Rules Popup Management */
  const [rulesOpen, setRulesOpening] = useState<boolean>(false)
  useLayoutEffect(()=>setRulesOpening(true),[])
  return <div>{rulesOpen.toString()}</div>;
};

export default Rules;
