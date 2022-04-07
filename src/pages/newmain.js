import '../styles/newmain.css';
import '../fonts.css';
import pic01 from '../assets/pic01.jpg';
import avatar from '../assets/avatar.jpg';
import pic02 from '../assets/pic02.jpg';
import pic03 from '../assets/pic03.jpg';
import logonew from '../assets/logo.jpg';
import pic04 from '../assets/pic04.jpg';
import pic05 from '../assets/pic05.jpg';
import pic06 from '../assets/pic06.jpg';
import pic07 from '../assets/pic07.jpg';


function NewMain() {
    return (
        <>
        <div id="wrapper">
		<header id="header">
			<h1><a href="#">Энциклопедия П.С.Строганова</a></h1>
			<nav className="links">
				<ul>
					<li><a href="/search">СТАТЬИ</a></li>
					<li><a href="#">КОНТАКТЫ</a></li>
					{/* <li><a href="/search">ПОИСК</a></li> */}
				</ul>
			</nav>
		</header>

		<div id="main">
			<article className="post">
				<header>
					<div className="title">
						<h2><a href="#">Род Строгановых</a></h2>
						<p>V веков истории рода Строгановых</p>
					</div>
					<div className="meta">
						<time className="published" datetime="2015-11-01">"Источник"</time>
						<a href="#" className="author"><span className="name">Университет ИТМО</span><img
								src={avatar} alt="" /></a>
					</div>
				</header>
				<a href="#" className="image featured"><img src={pic01} alt="" /></a>
				<p>Род русских промышленников и помещиков, из которого происходили крупные землевладельцы и
					государственные деятели XVI—XX веков.</p>
				<footer>
					<ul className="actions">
						<li><a href="#" className="button big">Читать подробнее</a></li>
					</ul>
				</footer>
			</article>

			<article className="post">
				<header>
					<div className="title">
						<h2><a href="#">Дом П. С. Строганова на Сергиевской улице</a></h2>
						<p>Общая информация</p>
					</div>
					<div className="meta">
						<time className="published" datetime="2015-10-25">"Источник"</time>
						<a href="#" className="author"><span className="name">Университет ИТМО</span><img
								src={avatar} alt="" /></a>
					</div>
				</header>
				<a href="#" className="image featured"><img src={pic02} alt="" /></a>
				<p>По переписи населения 1737 г. участок принадлежал капитану-поручику преображенского полка Федору
					Фирсову. У вдовы Фирсова его купил придворный двора цесаревны Елизаветы Петровны Андрей Каштарев.
				</p>
				<footer>
					<ul className="actions">
						<li><a href="#" className="button big">Читать подробнее</a></li>
					</ul>
				</footer>
			</article>
			
			<article className="post">
				<header>
					<div className="title">
						<h2><a href="#">Павел Сергеевич Строганов и его дом</a></h2>
						<p>Подробная биография</p>
					</div>
					<div className="meta">
						<time className="published" datetime="2015-10-22">"Источник"</time>
						<a href="#" className="author"><span className="name">Университет ИТМО</span><img
								src={avatar} alt="" /></a>
					</div>
				</header>
				<a href="#" className="image featured"><img src={pic03} alt="" /></a>
				<p>Обер-шенк русского императорского двора, коллекционер, меценат; представитель славного рода
					Строгановых</p>
				<footer>
					<ul className="actions">
						<li><a href="#" className="button big">Читать подробнее</a></li>
					</ul>
				</footer>
			</article>
			{/* <ul className="actions pagination">
				<li><a href="" className="disabled button big previous">Предыдущая страница</a></li>
				<li><a href="#" className="button big next">Следующая страница</a></li>
			</ul> */}
		</div>

		<section id="sidebar">
			<section id="intro">
				<a href="#" className="logo"><img src={logonew} alt="" /></a>
				<header>
					<h2>Университет ИТМО</h2>
					<p>Исторические факты о П.С. Строганове</p>
				</header>
			</section>

			<section>
				<div className="mini-posts">

					<article className="mini-post">
						<header>
							<h3><a href="#">Род Строгановых</a></h3>
							<time className="published" datetime="2015-10-20">*описание*</time>
							<a href="#" className="author"><img src={avatar} alt="" /></a>
						</header>
						<a href="#" className="image"><img src={pic04} alt="" /></a>
					</article>

					<article className="mini-post">
						<header>
							<h3><a href="#">Дом П.С.Строганова</a></h3>
							<time className="published" datetime="2015-10-19">*описание*</time>
							<a href="#" className="author"><img src={avatar} alt="" /></a>
						</header>
						<a href="#" className="image"><img src={pic05} alt="" /></a>
					</article>

					<article className="mini-post">
						<header>
							<h3><a href="#">Павел Сергеевич Строганов - биография</a></h3>
							<time className="published" datetime="2015-10-18">*описание*</time>
							<a href="#" className="author"><img src={avatar} alt="" /></a>
						</header>
						<a href="#" className="image"><img src={pic06} alt="" /></a>
					</article>

					<article className="mini-post">
						<header>
							<h3><a href="#">Строгановские места в Санкт-Петербурге и России</a></h3>
							<time className="published" datetime="2015-10-17">*описание*</time>
							<a href="#" className="author"><img src={avatar} alt="" /></a>
						</header>
						<a href="#" className="image"><img src={pic07} alt="" /></a>
					</article>

				</div>
			</section>

			<section className="blurb">
				<h2>О приложении</h2>
				<p>Приложение представляет собой набор исторических и информационных фактов для ознакомления.</p>
				<ul className="actions">
					<li><a href="#" className="button">Подробнее</a></li>
				</ul>
			</section>

			<section id="footer">
				<ul className="icons">
					<li><a href="#" className="fa-instagram"><span className="label">VK</span></a></li>
					<li><a href="#" className="fa-envelope"><span className="label">Email</span></a></li>
				</ul>
				<p className="copyright">&copy; <a href="#">Университет ИТМО</a>.</p>
			</section>
		</section>
	</div>
        </>
    );
}

export {NewMain};