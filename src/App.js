import logo from './logo.svg';
import './App.css';

import { Table } from 'antd';
import { useState } from 'react';
import 'antd/dist/antd.css';
import { Routes, Route, Link } from 'react-router-dom';
import { SearchApp } from './pages/search';
import { HouseApp } from './pages/house';
import { FamilyApp } from './pages/family';
import { MainApp } from './pages/main';



function App() {
    return (
            <Routes>
                <Route path="/family" element={<FamilyApp />} />
                <Route path="/house" element={<HouseApp />}/>
                <Route path="/" element={<MainApp />}/>
                <Route path="/search" element={<SearchApp />}/>
            </Routes>
    );
}

export default App;
