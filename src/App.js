import './App.css';
import 'antd/dist/antd.css';
import { Routes, Route } from 'react-router-dom';
import { ListArticles } from './pages/list';
import { SearchApp } from './pages/search';
import { HouseApp } from './pages/house';
import { FamilyApp } from './pages/family';
import { NewMain } from './pages/newmain';
import { CollectionAlexanderApp } from './pages/collection'
import { FutureHouseApp } from './pages/future'
import { SergeiGSApp } from './pages/sgs'
import { Footer } from './pages/components/footer'
import { DealsApp } from './pages/deals'
import { TownApp } from './pages/town'
import { SchoolApp } from './pages/school'
import { BarokkoApp } from './pages/barokko'
import { SewingApp } from './pages/sewing'
import { EstateApp } from './pages/estate'
import {Helmet} from "react-helmet";


function App() {
    return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Университет ИТМО — Павел Сергеевич Строганов</title>
                <link rel="canonical" href="Исторические статьи о семье Строгановы" />
            </Helmet>
        <Routes>
                <Route path="/family" element={<FamilyApp />} /> //Род Строгановых
                <Route path="/house" element={<HouseApp />}/> // Дом Строганова
                <Route path="/" element={<NewMain />}/> // Главная
                <Route path="/search2" element={<SearchApp />}/> // поиск2
                <Route path="/search" element={<ListArticles />}/> // поиск1
                <Route path="/collection" element={<CollectionAlexanderApp />} /> // Коллекции графа А. С. Строганова
                <Route path="/futurehouse" element={<FutureHouseApp />} /> // Современная жизнь дома
                <Route path="/sgs" element={<SergeiGSApp />} /> // Сергей Григорьевич Строганов
                <Route path="/footer" element={<Footer />} /> // Футер для всех эп
                <Route path="/deals" element={<DealsApp />} /> // Самые яркие дела Строгановых
                <Route path="/town" element={<TownApp />} /> // Дача Строгановых
                <Route path="/school" element={<SchoolApp />} /> // Строгановская иконописная школа
                <Route path="/barokko" element={<BarokkoApp />} /> // Строгановское барокко
                <Route path="/sewing" element={<SewingApp />} /> // Строгановское шитье
                <Route path="/estate" element={<EstateApp />} /> // Тамбовское имение
            </Routes>
        </>
            
    );
}

export default App;
