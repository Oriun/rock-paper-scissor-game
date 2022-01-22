import './App.css';
import Main from './components/main';
import Rules from './components/rules';
import Header from './components/header';
import React, { useEffect, useState } from 'react';

const App = () => {

  /** Score Management **/
  const savedScore = parseInt(localStorage.score || "0")
  const [score, setScore] = useState<number>(savedScore)
  useEffect(()=>localStorage.setItem('score',score.toString()),[score])

  return (
    <div className="app">
      <Header score={score}/>
      <Main setScore={setScore} />
      <Rules />
    </div>
  );
}

export default App;
