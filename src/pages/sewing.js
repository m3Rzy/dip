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
import { SrcLine } from './components/srcline';
const { Link } = Anchor;


function SewingApp() {
    document.title = 'Строгановское шитье';
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
        <div className='SewingApp'>
            <div className='progressMainWrapper'>
                <div className='progressMainStyle' style={{width: `${scrollTop}%`}} />
            </div>
            <div className="container-fluid-sewing" id="supertitle">
                
                <div className="listheader2">
                    <a href="/">
                        <div className="logo">
                            <img src={logo2} alt="" width="250px" className="logo_img-family" />
                        </div>
                    </a>
                    <div className="nextbtn">
                        <img src={picture2} alt="#" className="nextsvg" onClick={() => history(-1)}/>
                        <a className='backButton-my' onClick={() => history(-1)}></a>
                    </div>
                    {/* <button onClick={() => history(-1)}></button>  */}
                    <div className="titles">
                        <h1 className="title_main">Строгановское шитье</h1>
                        <h3 className="title_help">Вышивание было широко распространено на Руси — драгоценные ткани у нас начали производить только с XVIII века.</h3>
                        <div className="line"></div>
                        <FooterWidget>
                            <li className='footer-data'>📅 10.02.2022</li>
                            <li className='footer-write'>🖋 Университет ИТМО</li>
                            <li className='footer-write'>📄 Статья</li>
                            <li className='footer-write'>🕓  {'<'} 1 минуты</li>
                        </FooterWidget>
                    </div>
                </div>
                
                    <section className='anchor-mine' style={{opacity: `${vizy}%`}}>
                        <Anchor targetOffset={targetOffset} affix={true} className='try-anchor' style={{color: 'green'}}>
                            <Link href="#supertitle" title="Заголовок" className='try-anchor' style={{color: 'green'}}/>
                            <Link href="#sewing-main" title="Общая информация" />
                            
                        </Anchor>
                    </section>
            </div>
            <div className="container-fluid2">
                <div className="listheader-family">
                    <div style={{marginTop: 75}}>
                        <h className="title-veka" id="sewing-main">                     
                        Общая информация
                        </h>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Вышивание было широко распространено на Руси — драгоценные ткани у нас начали производить только с XVIII века, со времён Петра I. Парча, камка, бархаты, шёлковые и золотные нити и даже хлопок — всё было привозным с Востока и Запада. Ткани и материалы стоили огромных денег и только царский да боярский двор, да двор богатых служилых людей могли позволить себе такое роскошество. Шитьё золотом и серебром, драгоценными камнями и жемчугом на порядки увеличивало значимость, красоту и богатство царского и боярского платья, различных пелен и облачений церковных, убранства покоев и церковного интерьера, а также различных празднеств. Многие иностранцы, побывавшие в Московии, отмечали красоту и высокое искусство русской вышивки.

                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Для того чтобы создать одно шитое произведение требовалось не только немалое время и большие денежные средства, но также мастерство целой группы профессионалов в своей области. Это не только мастерицы-вышивальщицы, которые непосредственно выполняли свою работу, но также иконописцы – «знаменщики», создающие рисунок, «травщики», разрабатывающие орнаментальные композиции, «словописцы», умеющие закомпоновать тексты молитв в виртуозную композицию старославянской вязи. Мастерские, в которых создавались эти прекрасные предметы, могли быть только при царском и боярском дворе, при дворе богатых служилых людей и в крупных богатых монастырях. Каждая мастерская отличалась «своим почерком», своими особенностями: умением изографов, мастериц, традициями, возможностями и богатством материалов. Такие мастерские – «светлицы» – были у Строгановых в Сольвычегодске, на Севере России. Данные памятники представляют собой образцы шитья высочайшего художественного уровня как в изобразительном решении, так и в техническом исполнении. Имя Строгановых «дало название стилям в иконописи, лицевом шитье и архитектуре».


                        </p>
                    </div>
                    <div className="textarea-normal">
                        <p>
                        Сегодня известно около двухсот произведений строгановского лицевого (сюжетного) шитья. В коллекции Пермской галереи их около двадцати — подвесные пелены, литургические ткани, облачения священнослужителей. 

                        </p>
                    </div>
                    
                    {/* <div className='footer-data'>📅 07.02.2022</div> */}
                    <FooterWidget />
                    {/* ФУТЕР */}
                    <SrcLine>
                        <li><a href='https://icons.pstgu.ru/bibliography/171'>Силкин А.В. Строгановское лицевое шитье. 2002</a></li>
                        <li><a href='https://permartmuseum.ru/article/43'>Собрание Пермской художественной галереи</a></li>
                        <li><a href='https://rusmuseumvrm.ru/data/collections/ikonopis/drt-275/index.php'>Виртуальный Русский музей. Пелена. Рождество Богоматери</a></li>
                    </SrcLine>
                    <div className="next-article" style={{marginTop: 75}}>
                        <p className="next-h1">Тамбовское имение</p>
                        <p className="next-h2">
                        Село Кариан-Знаменское расположено в 35 верстах от Тамбова, в селе Знаменское.
                        </p>
                        <a href="/estate"><button type="button" className="block">Читать</button></a>
                    </div>

                </div>
                <div className="container-fluid3">
                    <Footer />
                </div> 
            </div>
        </div>
    )
}

export {SewingApp};