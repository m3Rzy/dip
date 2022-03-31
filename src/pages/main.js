import logo from '../assets/logo-whiye.png';
import picture from '../assets/next.svg';
import '../styles/main.css';
import '../fonts.css';


function MainApp() {
    return (
        <div className="safearea">
        <div className="listheader">

            
            <img src={logo} width="250px" alt="" className="logo_img" />
            

            <div className="knop">
                <a className="ghost-button" href="#">Статьи</a>
                <a className="ghost-button" href="#">Квест</a>
            </div>
            <div className="titles">
                <h1 className="title_main">Павел Сергеевич Строганов и его дом</h1>
                <h3 className="title_help">Обер-шенк русского императорского двора, коллекционер, меценат; представитель славного рода Строгановых</h3>
                <div className="line"></div>
                <div className="nextbtn">
                    <img src={picture} alt="#" className="nextsvg" />
                    <a href="#" className="nextbutton">Читать далее</a>
                </div>
            </div>
            <div className="urls">
                <ul className="articles">
                    <li><a href="pages/house/house.html" className="article">Дом П. С. Строганова на Сергиевской улице</a></li>
                    <li><a href="#" className="article">Строгановские места в Санкт-Петербурге и России</a></li>
                    <li><a href="#" className="article">Павел Сергеевич Строганов</a></li>
                    <li><a href="pages/family/family.html" className="article">Род Строгановых</a></li>
                </ul>
            </div>
        </div>
    </div>
    );
}

export default MainApp;