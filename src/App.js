import logo from './logo.svg';
import './App.css';

import { Table } from 'antd';
import { useState } from 'react';
import 'antd/dist/antd.css';



function App() {
    const [dataSource, setDataSource] = useState([
    {
    name: "Дом П. С. Строганова на Сергиевской улице",
    about: "первая",
    },
    {
    name: "Строгановские места в Санкт-Петербурге и России",
    about: "вторая",
    },
    {
    name: "Павел Сергеевич Строганов - биография",
    about: "третья",
    },
    {
    name: "Род Строгановых",
    about: "четвертая",
    }, 
    ]);
    
        
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "About",
            dataIndex: "about",
        }
    ]

    return (
        <div className="SearchApp">
            <header className="SearchApp-header">
                <Table columns={columns} dataSource={dataSource}> </Table>
            </header>
        </div>
    );
}

export default App;
