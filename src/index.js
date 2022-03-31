import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './pages/main.js';
import FamilyApp from './pages/family.js';
import HouseApp from './pages/house.js';


import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
      <MainApp />
      {/* <FamilyApp />
      <HouseApp /> */}
       </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();