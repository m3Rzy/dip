import { useState, useEffect } from "react";
import '../styles/customsearch.css';
import data from '../data/data.json';
import logoblack from '../assets/logo-black.png';
import vk from '../assets/posts/icons8-vk-в-круге-48.png';
import gmail from '../assets/posts/icons8-gmail-48.png';
import lens from '../assets/search.png';


const filterArticles = (searchText, listOfArticles) => {
    if (!searchText) {
      return listOfArticles;
    }
    return listOfArticles.filter(({ name }) =>
    name.toLowerCase().includes(searchText.toLowerCase())
  );
  }

function ListArticles() {
    document.title = 'Список статей';
    const [articleList, setArticleList] = useState(data);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filteredArticles = filterArticles(searchTerm, data);
            setArticleList(filteredArticles)
            
        }, 300)
        return () => clearTimeout(Debounce)
    }, [searchTerm]);

    return (
        <>
            <header id="header">
                <h1><a href="/"><img src={logoblack} width="250px"/></a></h1>
                    <nav className="links">
                            <ul>
                                <li><a href="/">ГЛАВНАЯ</a></li>
                                <li><a href="#openModal">КОНТАКТЫ</a></li>
                            </ul>
                    </nav>
            </header>
            <div id="openModal" className="modal">
			<div className="modal-dialog">
				<div className="modal-content">
				<div className="modal-header">
					<h3 className="modal-title">Контакты</h3>
					<a href="#close" title="Close" className="close">×</a>
				</div>
				    <div className="modal-body">    
				            <ul className="icons">
								<li className='icons-li'><a href="https://vk.com/itmoru" className="fa-instagram"><img src={vk} width="40px"/></a></li>
								<li className='icons-li'></li>
								<li className='icons-li'></li>
								<li className='icons-li'><a href="abit@itmo.ru" className="fa-envelope"><img src={gmail} width="40px"/></a></li>
								<li className='icons-li'></li>
								<li className='icons-li'></li>
								<li className='icons-li'><a href="">+7 (812) 480-04-80</a></li>
							</ul>
				    </div>
				</div>
			</div>
		</div>
            <div style={{marginTop: 120}}>
                <div className="search-form" >
                        <input
                            autoFocus
                            type="text"
                            autoComplete="off"
                            placeholder="Введите название статьи"
                            onChange={(e) => setSearchTerm(e.target.value)
                            }
                        />
                        {/* <img src={lens} alt="" class="search-icon"></img> */}
				</div>
                
                <div style={{marginTop: 25}}></div>
                <div className="container-search">
                <ul className="ul-search">
                    {articleList.map((article, index) => {  
                        if(article.img == "/") {
                        article.img = "/search-posts/null.png";
                        } else {
                        return (
                        <li key={index} className="search-li">
                            <div className="product-item"> <a href="#"></a>
                                <img src={process.env.PUBLIC_URL + article.img} />
                                <div className="product-list">
                                    <h3>{article.name}</h3>
                                    <span className="price">{article.about}</span>
                                    <a href={article.url} className="button-search">Читать</a>
                                </div>
                            </div>
                        </li>
                        )}
                    })}
                </ul>
                </div>
            </div>
        </>
    )
}


export {ListArticles};