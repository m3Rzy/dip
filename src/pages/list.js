import { useState, useEffect } from "react";
import '../styles/customsearch.css';
import data from '../data/data.json';

const filterArticles = (searchText, listOfArticles) => {
    if (!searchText) {
      return listOfArticles;
    }
    return listOfArticles.filter(({ name }) =>
    name.toLowerCase().includes(searchText.toLowerCase())
  );
  }


function ListArticles() {

    const [articleList, setArticleList] = useState(data);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filteredArticles = filterArticles(searchTerm, data);
            setArticleList(filteredArticles)
            
        }, 300)
        return () => clearTimeout(Debounce)
    }, [searchTerm]);

    // let table_article = articleList.map((article, index) => {
    //     return <tr key={article.id}>
    //         <td>{article.name}</td>
    //         <td>{article.about}</td>
    //     </tr>
    // })

    return (
        <>
            
            <div>
                <form className="search-form">
                        <input
                            autoFocus
                            type="text"
                            autoComplete="off"
                            placeholder="Искать тут..."
                            onChange={(e) => setSearchTerm(e.target.value)
                            }
                        />
				</form>
                <div style={{marginTop: 120}}></div>
                <ul>
                    {articleList.map((article, index) => {  
                        if(article.img == "/") {
                        article.img = "/search-posts/null.png";
                        console.log(article.img)
                        } else {

                        
                        return (
                        
                        <li key={index}>
                            <div className="product-item">
                                <img src={process.env.PUBLIC_URL + article.img} />
                                <div className="product-list">
                                    <h3>{article.name}</h3>
                                    <span className="price">{article.about}</span>
                                    <a href={article.url} className="button">Читать</a>
                                </div>
                            </div>
                        </li>)}
                    })}
                </ul>
            </div>
        </>
    )
}


export {ListArticles};