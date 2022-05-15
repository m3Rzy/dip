import logo from '../assets/logo-whiye.png';
import '../styles/house.css';
import '../styles/allObjects.css';
import '../fonts.css';
import '../styles/family.css';
import '../styles/scroll.css';
import '../styles/allObjects.css'
import '../fonts.css';
import '../styles/anchor.css';
import logo2 from '../assets/logo-whiye.png';
import picture2 from '../assets/next.svg';
import sas from '../assets/img-pages/SAS.jpg'
import React, { useState, useEffect } from 'react';
import { Anchor } from 'antd';
import newpic from '../assets/headers/house-strg.png'
import { useNavigate } from 'react-router-dom'
import '../styles/anchor.css';
const { Link } = Anchor;


function HouseApp() {
    document.title = 'Дом П. С. Строганова';
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
            <div className='container-fluid-house' id='supertitle'>
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
                        <h1 className="title_main">Дом рода Строгановых</h1>
                        <h3 className="title_help">*описание*</h3>
                        <div className="line"></div>
                    </div>
                </div>
                <section className='anchor-mine' style={{opacity: `${vizy}%`}}>
                        <Anchor targetOffset={targetOffset} affix={true}>
                            <Link href="#supertitle" title="Заголовок"/>
                            <Link href="#part1" title="Общая история" /> 
                            <Link href="#part2" title="Дополнительная информация"></Link>
                        </Anchor>
                    </section>
            </div>
            <div className="container-fluid2">
                <div className="listheader-family">
                    <div style={{marginTop: 75}}>
                        <h className="title-veka" id="part1">                     
                        Общая история
                        </h>
                    </div>
                    <div className="textarea-normal">
                        <p>По переписи населения 1737 г. участок принадлежал капитану-поручику преображенского полка <a href="#" className='hyperurl'>Федору Фирсову</a>. У вдовы Фирсова его купил придворный двора цесаревны Елизаветы Петровны Андрей Каштарев. Дом, скорее всего, был деревянный.
                    </p>
                    </div>
                    <div className="textarea-normal">
                        <p>В 1740-х гг. владелец - <a href="#" className='hyperurl'>Александр Александрович Меншиков</a>, сын А. Д. Меншикова, в те годы секунд-майор Преображенского полка. После вступления на престол Петра II в 1727 г. был сослан вместе с отцом в Березов. Императрица Анна Иоановна возвратила его в Петербург. При Елизавете Александр - генерал-майор; при Екатерине II - генерал-аншеф. А. А. Меньшиков - единственный мужчина, награжденный орденом св. влкм. Екатерины (награждались только женщины).
                    </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        В 1749 г. двор купил обер-комиссар <a href="#" className='hyperurl'>Иван Петрович Стеллих</a>.
                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        В 1758 г. арх. Кнебель произвел обмер участка, видимо, в связи с переходом владения к <a href="#" className='hyperurl'>Борису Ивановичу Княжнину</a>, псковскому вице-губернатору. Его сын <a href="#" className='hyperurl'>Яков</a>, будущий поэт, жил в этом доме. Яков женился на дочери основателя русского театра А. П. Сумарокова Екатерине, одной из первых русских поэтесс. В 1772 г. Я. Б. Княжнин продал доставшийся от отца дом. Тогда дом был деревянным на каменном фундаменте. 
                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Следующий владелец - протопоп Петропавловского собора Василий Алексеев, затем советник И.И. Татищев, позже - генерал-майор С.М. Давыдов. По просроченной закладной дом перешел к князьям Несвитским (Несвицким), Ивану и Петру, сыновьям петербургского губернатора, вице-адмирала В. Ф. Несвитского. Дом принадлежал Несвитским, служившим в лейб-гвардии Конном полку, в 1792-1794 гг. В начале XIX в. участок принадлежал представителям семейства Строгановых. Сначала Елизавете Александровне, вдове Александра Николаевича Строганова, затем их сыну, дипломату Григорию Александровичу. Г.А. Строганов был двоюродным дядей Н. Н. Гончаровой (Пушкиной). В 1857 г. владельцами стали П.С. Строганов, внук Г. А., и его жена Анна Дмитриевна, дочь известного военного историка Д.П. Бутурлина. В 1857 г. по проекту арх. И.А. Монигетти началось возведение двухэтажного особняка. В 1877 г. по проекту арх. М.Е. Месмахера по Сергиевской (Чайковского) ул. сделали пристройку в три окна для домовой церкви.  
                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Главный вход находился на Сергиевской ул. Парадные помещения располагались справа от беломраморной лестницы. В вестибюле стоит мраморная лисица (часть герба Строгановых), держащая картуш с вензелем "СС". Такой же вензель украшает угол дома. Первоначально основной двухэтажный объем располагался традиционно для Строгановых глаголем, т. е. выходил сразу на две улицы: Сергиевскую (сейчас это ул.Чайковского) и Моховую. Над углом возвышался купол, придававший всему зданию торжественный вид. Въезд располагался со стороны Сергиевской улицы, в сторону которой были обращены ворота.
                        </p>
                    </div>
                    
                    <div style={{marginLeft: 400, marginTop: 30}}>
                        <img src={sas} className="strog-img"></img>
                        <p className='podimg'>Портрет Александр Григорьевича Строганова</p>
                    </div>
        
                    {/* НОВЫЙ ТАЙТЛ */}

                    <div style={{marginTop: 35}}>
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

export {HouseApp};