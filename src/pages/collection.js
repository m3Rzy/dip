import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import logo2 from '../assets/logo-whiye.png';
import picture2 from '../assets/next.svg';
import '../styles/collection.css'
import sas from '../assets/img-pages/SAS.jpg'

import { Anchor } from 'antd';
const { Link } = Anchor;

function CollectionAlexanderApp() {
    document.title = 'Коллекция Александра Строганова';
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
        <div className='CollectionAlexanderApp'>
            <div className='progressMainWrapper'>
                <div className='progressMainStyle' style={{width: `${scrollTop}%`}} />
            </div>
            <div className='container-fluid-collection' id='supertitle'>
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
                        <h1 className="title_main">Коллекция Александра Строганова</h1>
                        <h3 className="title_help">А. С. Строганов - крупнеший коллекционер</h3>
                        <div className="line"></div>
                    </div>
                </div>
                <section className='anchor-mine' style={{opacity: `${vizy}%`}}>
                        <Anchor targetOffset={targetOffset} affix={true}>
                            <Link href="#supertitle" title="Заголовок"/>
                            <Link href="#part1" title="А. С. Строганов - крупнеший коллекционер" /> 
                                <Link href="#ssg" title="Граф Александр Сергеевич Строганов"></Link>
                        </Anchor>
                    </section>
            </div>
            <div className="container-fluid2">
                <div className="listheader-family">
                    <div style={{marginTop: 75}}>
                        <h className="title-veka" id="part1">                     
                        А. С. Строганов - крупнеший коллекционер
                        </h>
                    </div>
                    <div className="textarea-normal">
                        <p>Граф <a href="#" className='hyperurl'>Александр Сергеевич Строганов</a> — крупнейший коллекционер своего времени. Его заботами во дворце на Невском создается не только известнейшая в России картинная галерея, но и специальные собрания нумизматики, минералогии, древностей.
                    </p>
                    </div>
                    <div style={{marginLeft: 400}}>
                        <img src={sas} className="strog-img"></img>
                        <p className='podimg'>Портрет Александра Сергеевича Строганова</p>
                    </div>
                    <div className="textarea-normal">
                        <p>Совсем еще юным молодой вельможа вступает в контакты с художниками и учеными. Когда в 1750 году в районе строгановских соляных копей на севере России были открыты древние серебряные блюда, Строганов сообщает сведения о них парижской Академии наук. Президент Шарль де Бросс посвящает им пространную публикацию в «Записках» Академии.</p>
                    </div>
                    <div className="textarea-normal">
                        <p>Свою коллекцию живописи, ставшую одним из первых русских музеев, А.С.Строганов начинает формировать в начале 50-х годов XVIII века. В 1752 году он совершает путешествие за границу. Полотна, купленные им в 1754—1755 годах в Италии, принадлежали кисти мастеров Ренессанса. Самая первая покупка, судя по письмам к отцу, была сделана в Милане осенью 1754 года. В Венеции, в январе следующего года, он приобретает полотно Корреджо. В 1756 году юный граф переезжает в Париж. Когда позже, в 1793-м он публикует «Систематический каталог картин» своей коллекции (на французском языке), он скрупулезно отмечает все обстоятельства своих приобретений. Так мы узнаем, что 22 марта 1756 года он посещает распродажу картин герцога де Таллара. Граф приобретает за 1310 ливров картину Доменико Фети «Сельская жизнь». В своем «Каталоге» 1793 года он пишет: «она была в кабинете господина Биброна де Кормери, из него перешла в собрание Маршала де Талара, я ее купил на его аукционе в 1756 г. С дерева была переведена на холст знаменитым Хакэном в 1772 г. в Париже». Ныне эта картина с наименованием «Адам и Ева» хранится в Тульском художественном музее.
                    </p>
                    </div>
                    <div style={{marginLeft: 400}}>
                        <img src={sas} className="strog-img"></img>
                        <p className='podimg'>Портрет Александр Григорьевича Строганова</p>
                    </div>
        
                    {/* НОВЫЙ ТАЙТЛ */}

                    <div style={{marginTop: 75}}>
                        <h className="title-veka" id="part2">
                            Государственный деятель и меценат
                        </h>
                    </div>
                    <div className="textarea-normal">
                        <p>Наибольшей известностью из нового поколения Строгановых пользовался старший сын «строптивого» дипломата <a href="#" className='hyperurl'>Сергей Григорьевич (1794–1882)</a> – выдающийся государственный деятель и меценат, с именем которого связан новый этап в истории старинной русской династии, ее возрождение и продолжение. Когда грянула Отечественная война 1812 года, Сергей Григорьевич заканчивал курс в Институте инженеров путей сообщения, куда поступил в 15 лет. Зачисленный на военную службу, он участвовал в войне с Наполеоном, отличился в Бородинском сражении. С. Г. Строганов прошел всю войну, находился в рядах русских войск, триумфально вступивших в 1814 году в Париж.</p>
                    </div>
                    <div className="textarea-normal">
                        <p>После возвращения войск в Россию С. Г. Строганов с января 1816 года служит штаб-ротмистром в лейб-гвардии гусарском полку, расквартированном в Царском Селе, где в то же время заканчивал учебу молодой лицеист Александр Пушкин. В лицейские годы Пушкин был влюблен в Наталью Кочубей, жившую с родителями в летние месяцы на царскосельской даче. Среди знакомых юной красавицы, несомненно, был и молодой гвардейский ротмистр. В сентябре 1820 года она стала женой барона Александра Григорьевича Строганова, родного брата Сергея Григорьевича.</p>
                    </div>

                    {/* ФУТЕР */}

                    <div className="next-article" style={{marginTop: 75}}>
                        <p className="next-h1">Дом П. С. Строганова на Сергиевской улице</p>
                        <p className="next-h2">Дворец Строгановых, построенный по проекту архитектора Франческо Бартоломео Растрелли в 1753—1754 годах, один из образцов уникального растреллиевского «барочно-рокайльного стиля».</p>
                        <a href="/house"><button type="button" className="block">Читать</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {CollectionAlexanderApp};