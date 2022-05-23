import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import logo2 from '../assets/logo-whiye.png';
import sitmo from '../assets/logo-full.png';
import picture2 from '../assets/next.svg';
import '../styles/collection.css'
import mapfuture from '../assets/img-pages/mapfuture.jpg'
import { Anchor } from 'antd';
import { Footer } from './components/footer'
import { FooterWidget } from './components/footerwidget';
const { Link } = Anchor;


function TownApp() {
    document.title = 'Дача Строгановых';
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
        if (opacity >= 6.8) {
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
        <div className='TownApp'>
            <div className='progressMainWrapper'>
                <div className='progressMainStyle' style={{width: `${scrollTop}%`}} />
            </div>
            <div className="container-fluid-town" id="supertitle">
                
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
                        <h1 className="title_main">Дача Строгановых</h1>
                        <h3 className="title_help">Большая территория между большой Невкой и Черной речкой.</h3>
                        <div className="line"></div>
                        <FooterWidget>
                            <li className='footer-data'>📅 12.05.2021</li>
                            <li className='footer-write'>🖋 Университет ИТМО</li>
                            <li className='footer-write'>📄 Статья</li>
                            <li className='footer-write'>🕓  {'<'} 1 минуты</li>
                        </FooterWidget>
                    </div>
                </div>
                
                    <section className='anchor-mine' style={{opacity: `${vizy}%`}}>
                        <Anchor targetOffset={targetOffset} affix={true}>
                            <Link href="#supertitle" title="Заголовок"/>
                            <Link href="#town-main" title="Дача Строгановых на Черной речке" /> 
                        </Anchor>
                    </section>
            </div>
            <div className="container-fluid2">
                <div className="listheader-family">
                    <div style={{marginTop: 75}}>
                        <h className="title-veka" id="town-main">                     
                        Дача Строгановых на Черной речке
                        </h>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Большая территория между Большой Невкой и Черной речкой в 18-19 веке принадлежала баронам-графам Строгановым, здесь располагалась их загородная усадьба с парком, известная как «Строгановская дача». Для А.Строганова усадебный дом был построен по проекту А.Воронихина. 


                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        После смерти А.Строганова дача на Черной речке стала приходить в запустение, наследники графа ее не жаловали, а в 1908 году здание усадьбы и вовсе было полностью перестроено в трехэтажный доходный дом, ничем особым из чреды рядовой застройки не выделявшимся. Здание перестроенной дачи стояло на набережной вплоть до 1969 года, пока не было снесено в связи с расширением Приморского проспекта. О некогда роскошном парке напоминает пока еще не застроенный сквер с круглым прудом посередине.


                        </p>
                    </div>
                    
                    
                    

                    {/* ФУТЕР */}
                    <div className="next-article" style={{marginTop: 75}}>
                        <p className="next-h1">Строгановская иконописная школа</p>
                        <p className="next-h2">
                        Наиболее яркое явление в поздней древнерусской иконописи. Её хронолоические рамки определяются второй половиной 16 – первой половиной 17 в.</p>
                        <a href="/school"><button type="button" className="block">Читать</button></a>
                    </div>

                </div>
                <div className="container-fluid3">
                    <Footer />
                </div> 
            </div>
        </div>
    )
}

export {TownApp};