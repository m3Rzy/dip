import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import logo2 from '../assets/logo-whiye.png';
import picture2 from '../assets/next.svg';
import '../styles/collection.css'
import sas from '../assets/img-pages/SAS.jpg'
import { Anchor } from 'antd';
const { Link } = Anchor;



function FutureHouseApp() {
    document.title = 'Современная жизнь Дома';
    const history = useNavigate();
    
    const [targetOffset, setTargetOffset] = useState(undefined);
    const [scrollTop, setScrollTop] = useState(0);
    const [vizy, onOpacity] = useState(0)
    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        var opacity = 0;
        var vizy = 0;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height * 100);
        opacity = (winScroll / 100)
        console.log(opacity)
        if (opacity >= 6.5) {
        vizy = 100;
        }
        onOpacity(vizy, 1000)
        setScrollTop(scrolled)
    }
    
    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        
        return () => window.removeEventListener("scroll", onScroll)
    })

    useEffect(() => {
        setTargetOffset(window.innerHeight / 14);
    }, []);

    return (
        <div className="FutureHouseApp">
            <div className='progressMainWrapper'>
                <div className='progressMainStyle' style={{width: `${scrollTop}%`}} />
            </div>
            <div className="container-fluid-futurehouse" id="supertitle">
                
                <div className="listheader2">
                    <a href="/">
                        <div className="logo">
                            <img src={logo2} alt="" width="250px" className="logo_img-family" />
                        </div>
                    </a>
                    <div className="nextbtn">
                        <img src={picture2} alt="#" className="nextsvg" onClick={() => history(-1)}/>
                        <a className='backButton-my' onClick={() => history(-1)}>Назад</a>
                    </div>
                    {/* <button onClick={() => history(-1)}></button>  */}
                    <div className="titles">
                        <h1 className="title_main">Современная жизнь Дома</h1>
                        <h3 className="title_help">Дом Строгановых в наше время</h3>
                        <div className="line"></div>
                    </div>
                </div>
                
                    <section className='anchor-mine' style={{opacity: `${vizy}%`}}>
                        <Anchor targetOffset={targetOffset} affix={true}>
                            <Link href="#supertitle" title="Заголовок"/>
                            <Link href="#part1" title="Служение России: Строгановы" /> 
                                <Link href="#ssg" title="Александр Григорьевич Строганов">
                                    <Link href="#part2" title="Государственный деятель и меценат" />
                                    <Link href="#war" title="Служебная карьера" />
                                    <Link href="#hislife" title="Личная жизнь" />
                                    <Link href="#nextson" title="Наследники Строганова" />
                                </Link>
                            
                        </Anchor>
                    </section>
            </div>
        </div>
    )
}

export {FutureHouseApp};