import '../styles/newmain.css';
import avatar from '../assets/logo-blue.png'
import logoblack from '../assets/logo-black.png';
import p1 from '../assets/posts/1.png';
import p2 from '../assets/posts/2.png';
import collection_post from '../assets/img-pages/collection.png'
import rod_post from '../assets/img-pages/rod.png'
import town_post from '../assets/img-pages/town.png'
import barokko_post from '../assets/img-pages/barokko.png'
import icon_post from '../assets/img-pages/icon.png'
import shee_post from '../assets/img-pages/shee.png'
import tamb_post from '../assets/img-pages/tamb.png'
import sgs_post from '../assets/posts/sgs.png'
import city_post from '../assets/posts/city.png'
import house_strg_post from '../assets/img-pages/house_strg_post.png'
import p5 from '../assets/posts/5.png';
import vk from '../assets/posts/icons8-vk-в-круге-48.png';
import gmail from '../assets/posts/icons8-gmail-48.png';
import '../styles/allObjects.css';
import nullimg_post from '../assets/posts/null_post.png';
import {Helmet} from "react-helmet";
import emailjs, { send } from 'emailjs-com';
import { useState } from 'react'
import { Footer } from './components/footer'
import { FeedBackWidget } from './components/feedback' 
import { FooterWidget } from './components/footerwidget';


function NewMain() {
	document.title = 'Павел Сергеевич Строганов — Главная';
	const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <>
			{/* <Helmet>
                <meta charSet="utf-8" />
                <title>Университет ИТМО — Павел Сергеевич Строганов</title>
                <link rel="canonical" href="Исторические статьи о семье Строгановы" />
            </Helmet> */}
			
        <div id="wrapper">
		<FeedBackWidget trigger={buttonPopup} setTrigger={setButtonPopup}/>
		<header id="header">
			<h1><a href="#"><img src={logoblack} width="250px"/></a></h1>
			<nav className="links">
				
				<ul>
					<li className='icons-li'	style={{marginRight: 50}}><a href="/search">СТАТЬИ</a></li>
					<li className='icons-li'	style={{marginRight: 50}}><a onClick={() => setButtonPopup(true)}>ОБРАТНАЯ СВЯЗЬ</a></li>
					{/* <li className='icons-li'	style={{marginRight: 50}}><a href="#openModal">КОНТАКТЫ</a></li> */}
				</ul>
			</nav>
			
		</header>
		
		{/* Контакты */}
		{/* <div id="openModal" className="modal">
			<div className="modal-dialog">
				<div className="modal-content">
				<div className="modal-header">
					<h3 className="modal-title">Контакты</h3>
					<a href="#close" title="Закрыть окно" className="close">×</a>
				</div>
				<div className="modal-body">    
							<ul className="icons">
								<li><a href="https://vk.com/itmoru" className="fa-instagram"><img src={vk} width="40px"/></a></li>
								<li></li>
								<li></li>
								<li><p>+7 (812) 480-04-80</p></li>
								<li></li>
								<li></li>
								<li><a onClick={() => setButtonPopup(true)} className="fa-envelope"><img src={gmail} width="40px"/></a></li>
							</ul>
				</div>
				</div>
			</div>
		</div> */}
		{/* Обратная связь */}
		
		<div id="main">
			
			<article className="post">
				<header>
					<div className="title">
						<h4><a href="/family">Род Строгановых</a></h4>
						<p>Служение России. Великие предприниматели и меценаты Строгановы</p>
					</div>
				</header>
				
				<a href="/family" className="image featured"><img src={p5} alt="" /></a>
				
				<p>Род русских промышленников и помещиков, из которого происходили крупные землевладельцы и
					государственные деятели XVI—XX веков.</p>
					
				<footer>
					<ul className="actions">
						<li><a href="/family" className="button big">Читать подробнее</a></li>
						<li><div className="meta">
						<a className="author"><span className="name">Университет ИТМО</span><img
								src={avatar} alt="" /></a>
					</div></li>
					
					</ul>
				</footer>
			</article>

			<article className="post">
				<header>
					<div className="title">
						<h4><a href="/futurehouse">Современная жизнь дома</a></h4>
						<p>Дом Строгановых в наше время</p>
					</div>
					
				</header>
				<a href="/futurehouse" className="image featured"><img src={p2} alt="" /></a>
				<p>НВ 1952 г. образован радиотехнический техникум, в состав которого вошел Ленинградский электромеханический техникум трамвайно-троллейбусного управления. 
				</p>
				<footer>
					<ul className="actions">
						<li><a href="/futurehouse" className="button big">Читать подробнее</a></li>
						<li><div className="meta">
						<a className="author"><span className="name">Университет ИТМО</span><img
								src={avatar} alt="" /></a>
					</div></li>
					</ul>
				</footer>
			</article>
			
			<article className="post">
				<header>
					<div className="title">
						<h4><a href="/house">Дом рода Строгановых</a></h4>
						<p>Здание на Сергиевской, 11, без сомнения выросло из впечатлений от путешествия графа Павла Сергеевича</p>
					</div>
					
				</header>
				<a href="/house" className="image featured"><img src={house_strg_post} alt="" /></a>
				<p>Обер-шенк русского императорского двора, коллекционер, меценат; представитель славного рода
					Строгановых</p>
				<footer>
					<ul className="actions">
						<li><a href="/house" className="button big">Читать подробнее</a></li>
						<li><div className="meta">
						<a className="author"><span className="name">Университет ИТМО</span><img
								src={avatar} alt="" /></a>
					</div></li>
					</ul>
				</footer>
			</article>
			<article className="post">
				<header>
					<div className="title">
						<h4><a href="/sgs">Сергей Григорьевич Строганов – один из ярчайших российских вельмож</a></h4>
						<p>Подробная биография</p>
					</div>
					
				</header>
				<a href="/sgs" className="image featured"><img src={sgs_post} alt="" /></a>
				<p>Либерал? Ретроград? Почвенник? Западник? Великий гуманист? Безжалостный рубака? Все эти социальные ниши вроде бы подходили ему. Но ведь так не бывает!</p>
				<footer>
					<ul className="actions">
						<li><a href="/sgs" className="button big">Читать подробнее</a></li>
						<li><div className="meta">
					<a className="author"><span className="name">Университет ИТМО</span><img
							src={avatar} alt="" /></a>
				</div></li>
					</ul>
				</footer>
			</article>
			{/* <article className="post">
				<header>
					<div className="title">
						<h4><a href="/house">Сольвычегодск. Строганов Аникей Фёдорович</a></h4>
						<p>Подробная биография</p>
					</div>
					<div className="meta">
					
						<a className="author"><span className="name">Университет ИТМО</span><img
								src={avatar} alt="" /></a>
					</div>
				</header>
				<a href="/house" className="image featured"><img src={city_post} alt="" /></a>
				<p>Строганов Аникей Фёдорович (1488-1570) — создатель солеваренной промышленности в Сольвычегодске и в Перми, крупнейший русский предприниматель своего времени, государственный деятель.</p>
				<footer>
					<ul className="actions">
						<li><a href="/house" className="button big">Читать подробнее</a></li>
					</ul>
				</footer>
			</article>
			<article className="post">
				<header>
					<div className="title">
						<h4><a href="/house">П. С. Строганов и его супруга</a></h4>
						<p>Подробная биография</p>
					</div>
					<div className="meta">
					
						<a className="author"><span className="name">Университет ИТМО</span><img
								src={avatar} alt="" /></a>
					</div>
				</header>
				<a href="/house" className="image featured"><img src={nullimg_post} alt="" /></a>
				<p>Граф Павел Сергеевич Строганов (1823—1911) — обер-шенк русского императорского двора, коллекционер, меценат; старший брат Григория Сергеевича Строганова.</p>
				<footer>
					<ul className="actions">
						<li><a href="/house" className="button big">Читать подробнее</a></li>
					</ul>
				</footer>
			</article> */}


			{/* <ul className="actions pagination">
				<li><a href="#" className="button big next">Дальше</a></li>
			</ul> */}
		
		</div>
			
		<section id="sidebar">
			<section id="intro">
				{/* <a href="#" className="logo"><img src={logo} alt="" width="400px"/></a> */}
				<header>
					<h2>Павел Сергеевич Строганов</h2>
					<p>Исторические факты о П.С. Строганове</p>
				</header>
			</section>

			<section>
				<div className="mini-posts">

					<article className="mini-post">
						<header>
							<h3><a href="/collection">Коллекции графа А. С. Строганова</a></h3>
							<time className="published" datetime="2015-10-20">Граф Александр Сергеевич Строганов — крупнейший коллекционер своего времени</time>
						</header>
						<a href="/collection" className="image"><img src={collection_post} alt="" /></a>
						{/* <a className="author"><img src={avatar} alt="" /></a> */}

					</article>

					<article className="mini-post">
						<header>
							<h3><a href="/deals">Самые яркие дела Строгановых</a></h3>
							<time className="published" datetime="2015-10-19">Это произошло благодаря первопроходцам и купцам из Новгорода, которые оценили эту местность, находящуюся на пересечении двух водных артерий.</time>
							{/* <a className="author"><img src={avatar} alt="" /></a> */}
						</header>
						<a href="/deals" className="image"><img src={rod_post} alt="" /></a>
					</article>

					<article className="mini-post">
						<header>
							<h3><a href="/town">Дача Строгановых</a></h3>
							<time className="published" datetime="2015-10-18">Большая территория между Большой Невкой и Черной речкой</time>
							{/* <a className="author"><img src={avatar} alt="" /></a> */}
						</header>
						<a href="/town" className="image"><img src={town_post} alt="" /></a>
					</article>
					<article className="mini-post">
						<header>
							<h3><a href="/school">СТРОГАНОВСКАЯ ИКОНОПИСНАЯ ШКОЛА</a></h3>
							<time className="published" datetime="2015-10-17">Наиболее яркое явление в поздней древнерусской иконописи. Ее хронологические рамки определяются второй половиной 16 – первой половиной 17 в.</time>
							{/* <a className="author"><img src={avatar} alt="" /></a> */}
						</header>
						<a href="/school" className="image"><img src={icon_post} alt="" /></a>
					</article>
					<article className="mini-post">
						<header>
							<h3><a href="/barokko">Cтрогановское барокко</a></h3>
							<time className="published" datetime="2015-10-17">Архитектурное направение конца 17-начала 18 вв</time>
							{/* <a className="author"><img src={avatar} alt="" /></a> */}
						</header>
						<a href="/barokko" className="image"><img src={barokko_post} alt="" /></a>
					</article>
					<article className="mini-post">
						<header>
							<h3><a href="/sewing">Строгановское шитье</a></h3>
							<time className="published" datetime="2015-10-17">Вышивание было широко распространено на Руси — драгоценные ткани у нас начали производить только с XVIII века.</time>
							{/* <a className="author"><img src={avatar} alt="" /></a> */}
						</header>
						<a href="/sewing" className="image"><img src={shee_post} alt="" /></a>
					</article>
					<article className="mini-post">
						<header>
							<h3><a href="/estate">Тамбовское имение</a></h3>
							<time className="published" datetime="2015-10-17">Село Кариан-Знаменское расположено в 35 верстах от Тамбова, в селе Знаменское.</time>
							{/* <a className="author"><img src={avatar} alt="" /></a> */}
						</header>
						<a href="/estate" className="image"><img src={tamb_post} alt="" /></a>
					</article>
				</div>
			</section>

			<section className="blurb">
				<h2>О сайте</h2>
				<p>Сайт представляет собой набор исторических и информационных фактов для ознакомления.</p>
				<ul className="actions">
					<li><a href="https://itmo.ru/ru/" className="button">Подробнее</a></li>
				</ul>
			</section>

			<section id="footer">
				<ul className="icons-vertical">
					<li className='icons-li'><a href="https://vk.com/itmoru" className="fa-instagram"><img src={vk} width="40px"/></a></li>
					<li className='icons-li'></li>
					<li className='icons-li'></li>
					<li className='icons-li'><a onClick={() => setButtonPopup(true)} className="fa-envelope"><img src={gmail} width="40px"/></a></li>
				</ul>
				<p className="copyright" style={{marginTop: 30}}>&copy; <a href="#">Университет ИТМО</a>.</p>
			</section>
		</section>
	</div>
	<Footer />
        </>
    );
}

export {NewMain};