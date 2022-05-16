import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import logo2 from '../assets/logo-whiye.png';
import sitmo from '../assets/logo-full.png';
import picture2 from '../assets/next.svg';
import '../styles/collection.css'
import mapfuture from '../assets/img-pages/mapfuture.jpg'
import { Anchor } from 'antd';
import { Footer } from './components/footer'
const { Link } = Anchor;

function DealsApp() {
    document.title = 'Самые яркие дела Строгановых';
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
        <div className='DealsApp'>
                <div className='progressMainWrapper'>
                <div className='progressMainStyle' style={{width: `${scrollTop}%`}} />
            </div>
            <div className="container-fluid-deals" id="supertitle">
                
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
                        <h1 className="title_main">Самые яркие дела Строгановых</h1>
                        <h3 className="title_help">Это произошло благодаря первопроходным и купцам из Новгорода</h3>
                        <div className="line"></div>
                    </div>
                </div>
                
                    <section className='anchor-mine' style={{opacity: `${vizy}%`}}>
                        <Anchor targetOffset={targetOffset} affix={true}>
                            <Link href="#supertitle" title="Заголовок"/>
                            <Link href="#futurehouse-main" title="Центр социальных и гуманитарных наук" /> 
                            {/* <Link href="#futurehouse-ul" title="Основные задачи" /> */}
                        </Anchor>
                    </section>
            </div>
            <div className="container-fluid2">
                <div className="listheader-family">
                    <div style={{marginTop: 75}}>
                        <h className="title-veka" id="futurehouse-main">                     
                        Центр социальных и гуманитарных наук
                        </h>
                    </div>
                    <div className="textarea-normal">
                        <p>Центр социальных и гуманитарных наук (ЦСиГН) образован в сентябре 2018 года в результате реорганизации кафедры социальных и гуманитарных дисциплин. Центр объединяет преподавателей гуманитарных дисциплин «философии», «истории», «культурологии» и др.
                    </p>
                    </div>
                    <div style={{marginLeft: 100, marginTop: 40}}>
                        <img src={mapfuture} className="strog-img" style={{width: 870, height: 581}}></img>
                        <p className='podimg'>Местонахождение ЦСиГН'а в Санкт-Петербурге</p>
                    </div>
                    <div className="textarea-normal" style={{marginTop: 75}}>
                        <p>Цель центра социальных и гуманитарных наук - создание научно-методических, психолого-педагогических, организационных, образовательных и иных условий для обеспечения современного качества преподавания гуманитарных дисциплин в нормативах требований образовательного стандарта и создания инновационной модели гуманитарного образования Университета ИТМО, отвечающей современной  императиве конвергенции технического и гуманитарного образования, направленной на формирование ценностных ориентиров молодежи (гуманистических ценностей), духовно-нравственное развитие и культурное самоопределение личности, становление «культуры возможностей» через формирование дизайн-мышления и соответствующих компетенций (soft skills).
                        </p>
                    </div>
                    <div className="textarea-normal" id='futurehouse-ul'>
                        <p style={{fontSize: 20}}>Основными задачами Центра социальных и гуманитарных наук являются:</p>
                    </div>
                    <div className="textarea-normal" style={{marginTop: -40}}>
                    <ul className='futurehouse-li'>
                            <li>
                            Разработка и реализация рабочих программ дисциплин базовой и вариативной (элективной) части образовательной программы;
                            </li>
                            <li>
                            Научно-методическое обеспечение процесса образовательной и социокультурной деятельности;
                            </li>
                            <li>
                            Синкретизм научно-исследовательской, образовательной и социокультурной деятельности в области гуманитарных наук и интегрирование их результатов в учебный процесс;
                            </li>
                            <li>
                            Создание интегративных программ  и проектов, направленных на междисциплинарное взаимодействие гуманитарных дисциплин, конвергенцию гуманитарного и технического знания, социокультурную деятельность;
                            </li>
                            <li>
                            Создание on-line курсов и внедрение цифровых технологий  в образовательную практику гуманитарных дисциплин;
                            </li>
                            <li>
                            Организация  конференций, конкурсов и иных мероприятий по профилю деятельности ЦСиГН;
                            </li>
                            <li>
                            Участие в публикациях, научных мероприятиях факультета, Университета ИТМО по профилю  деятельности ЦСиГН;
                            </li>
                            <li>
                            Создание единой  образовательной платформы в электронном формате как средства для междисциплинарного взаимодействия, экспертной площадки, продвижения инновационных идей и площадки  развития межкультурной коммуникации;
                            </li>
                            <li>
                            Проведение работы по расширению связей ЦСиГН с общественными, научными, образовательными организациями  и учреждениями культуры по профилю своей деятельности;
                            </li>
                            <li>
                            Проведение мониторинга и анализа  эффективности внедряемых курсов и трансляция положительного опыта своей  деятельности во внутренней и внешней среде факультета и университета;
                            </li>
                            <li>
                            Организация работы с одаренными школьниками в рамках олимпиадного движения и кружковой работы в области гуманитарных дисциплин.
                            </li>

                        </ul>
                    </div>
                    

                    {/* ФУТЕР */}
                    <div className="next-article" style={{marginTop: 75}}>
                        <p className="next-h1">Дом П. С. Строганова на Сергиевской улице</p>
                        <p className="next-h2">Дворец Строгановых, построенный по проекту архитектора Франческо Бартоломео Растрелли в 1753—1754 годах, один из образцов уникального растреллиевского «барочно-рокайльного стиля».</p>
                        <a href="/house"><button type="button" className="block">Читать</button></a>
                    </div>

                </div>
            </div>
                <div className="container-fluid3">
                    <Footer />
                </div> 
        </div>
    )
}

export {DealsApp};