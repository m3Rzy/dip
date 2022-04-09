import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import {} from 'antd';
// import MainApp from './pages/main.js';
// import FamilyApp from './pages/family.js';
// import HouseApp from './pages/house.js';
import { BrowserRouter } from 'react-router-dom';


import reportWebVitals from './reportWebVitals';
import SearchApp from './pages/search';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
          {/* <MainApp /> */}
          <App />
        </BrowserRouter>
       </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();