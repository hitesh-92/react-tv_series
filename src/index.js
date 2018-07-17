import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';



// const getCurrentDate = () => {
//   const date = new Date();
//   return date.toDateString();
// };
// const greeting = React.createElement('h1', {}, 'Hello World');
// const greeting = <h1>Hello World! Current date: {getCurrentDate()}</h1>;


ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root')
);
// ReactDOM.render(greeting, document.getElementById('root'));

registerServiceWorker();
