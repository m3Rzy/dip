import { Input, Table, Button } from 'antd';
import { useState } from 'react';
import 'antd/dist/antd.css';
import '../styles/search.css';
import picture from '../assets/next.svg';
import {SearchOutlined} from '@ant-design/icons';





function SearchApp() {
    

    document.title = 'Павел Сергеевич Строганов — Поиск';
    const [dataSource] = useState([
    {
    name: "Дом П. С. Строганова на Сергиевской улице",
    about: "*описание*",
    // url: <Button onClick={() => {  }} type='primary'>Перейти</Button>
    url:  <a href="/house"><button className='custombtn'><span className='customspan'>Читать</span></button></a>,
    },
    {
    name: "Строгановские места в Санкт-Петербурге и России",
    about: "*описание*",
    url:  <a href="#/"><button className='custombtn'><span className='customspan'>Читать</span></button></a>,
    },
    {
    name: "Павел Сергеевич Строганов - биография",
    about: "*описание*",
    url:  <a href="#/"><button className='custombtn'><span className='customspan'>Читать</span></button></a>,
    },
    {
    name: "Род Строгановых",
    about: "*описание*",
    url:  <a href="/family"><button className='custombtn'><span className='customspan'>Читать</span></button></a>,
    }, 
    ]);
    
        
    const columns = [
        {
            title: "Название статьи",
            dataIndex: "name",
            filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => {
                return (
                <>
                <Input autoFocus placeholder="Введите название статьи"
    value={selectedKeys[0]}
    onChange={(e) => {
        setSelectedKeys(e.target.value ? [e.target.value] : [])
        confirm({closeDropdown: false});
    }}
    onPressEnter={() => {
        confirm()
    }}
    onBlur={() => {
        confirm()
    }}/>;
                <Button onClick={() => { confirm(); }} type='primary' >Поиск</Button>
                <Button onClick={() => { clearFilters(); }} type='danger'>Сбросить</Button>
                </>
                );
            },
            filterIcon: () => {
                return <SearchOutlined/>;
            },
            onFilter:(value, record)=> {
                return record.name.toLowerCase().includes(value.toLowerCase())
            },
        },
        {
            title: "Описание",
            dataIndex: "about",
        },
        {
            title: "Статья",
            dataIndex: "url",
        },
    ]

    return (
        <div className="SearchApp">
            
            <header className="SearchApp-header">
                <Table style={{display:'flex', flex:1, margin:100}} columns={columns} dataSource={dataSource}> </Table>

                
                <div className="nextbtn">
                <img src={picture} alt="#" className="nextsvg" />
                <a href="/" className="nextbutton">На главную</a>
            </div>
            </header>
        </div>
    );
}


export {SearchApp};