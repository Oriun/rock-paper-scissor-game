import React from 'react';
import './main.scss'

type MainProps = {
    setScore: React.Dispatch<number>
}
const Main = ({ setScore }: MainProps) => {
  return <div>Main</div>;
};

export default Main;
