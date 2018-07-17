import React from 'react';

const getTime = () => {
  return new Date().toDateString();
};

const Intro = (props) => (
  <p className="App-intro">
    {props.message}
    <span>{getTime()}</span>
  </p>

);

export default Intro;
