import './App.css';
import 'antd/dist/antd.css';
import { Routes, Route } from 'react-router-dom';
import { ListArticles } from './pages/list';
import { SearchApp } from './pages/search';
import { HouseApp } from './pages/house';
import { FamilyApp } from './pages/family';
import { NewMain } from './pages/newmain';




function App() {
    return (
            <Routes>
                <Route path="/family" element={<FamilyApp />} />
                <Route path="/house" element={<HouseApp />}/>
                <Route path="/" element={<NewMain />}/>
                <Route path="/search2" element={<SearchApp />}/>
                <Route path="/search" element={<ListArticles />}/>
            </Routes>
    );
}

export default App;
