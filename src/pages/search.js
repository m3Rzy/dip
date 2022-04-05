import { Input, Table, Button } from 'antd';
import { useState } from 'react';
import 'antd/dist/antd.css';
import '../styles/search.css';
import {SearchOutlined} from '@ant-design/icons';



function SearchApp() {
    const [dataSource, setDataSource] = useState([
    {
    name: "Дом П. С. Строганова на Сергиевской улице",
    about: "первая",
    url: <Button onClick={() => {  }} type='primary'>Перейти</Button>
    },
    {
    name: "Строгановские места в Санкт-Петербурге и России",
    about: "вторая",
    url: <Button onClick={() => {  }} type='primary'>Перейти</Button>
    },
    {
    name: "Павел Сергеевич Строганов - биография",
    about: "третья",
    url: <Button onClick={() => {  }} type='primary'>Перейти</Button>
    },
    {
    name: "Род Строгановых",
    about: "четвертая",
    url: <Button onClick={() => {  }} type='primary'>Перейти</Button>
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
                onChange={(e)=>{
                    setSelectedKeys(e.target.value?[e.target.value] : [])
                    confirm({closeDropdown : false});
                }}
                onPressEnter={()=>{
                    confirm()
                }}
                onBlur={() => {
                    confirm()
                }}></Input>;
                <Button onClick={() => { confirm(); }} type='primary'>Поиск</Button>
                <Button onClick={() => { clearFilters(); }} type='danger'>Сбросить</Button>
                </>
                );
            },
            filterIcon: () => {
                return <SearchOutlined></SearchOutlined>;
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
            </header>
        </div>
    );
}

export default SearchApp;