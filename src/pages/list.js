import { useState, useEffect } from "react";
import '../styles/customsearch.css';
import data from '../data/data.json';
import logoblack from '../assets/logo-black.png';
import vk from '../assets/posts/icons8-vk-в-круге-48.png';
import gmail from '../assets/posts/icons8-gmail-48.png';
import lens from '../assets/search.png';
import emailjs, { send } from 'emailjs-com';


const filterArticles = (searchText, listOfArticles) => {
    if (!searchText) {
      return listOfArticles;
    }
    return listOfArticles.filter(({ name }) =>
    name.toLowerCase().includes(searchText.toLowerCase())
  );
  }

function ListArticles() {
    const [sender_name, set_sender_name] = useState('');
	const [sender_email, set_sender_email] = useState('');
	const [message, set_message] = useState('');
	const handleName = (e) => {
		set_sender_name(e.target.value)
	}
	const handleEmail = (e) => {
		set_sender_email(e.target.value)
	}
	const handleMessage = (e) => {
		set_message(e.target.value)
	}
	const sendEmail = (e) => {
		e.preventDefault()
		send(
			'service_z2k86wh',
			'template_olsgytm',
			{sender_name, sender_email, message},
			'_EYcCDdury5UIBogr'
		)
		.then((response, {resetForm}) => {
			console.log('Сообщение было успешно отправлено!', response.status, response.text)
			resetForm(response = '')
		})
		.catch((err) => {
			console.log('Ошибка при отправлении сообщения', err)
		})
		
		
	}

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
                                <li className='icons-li' style={{marginRight: 50}}><a href="#openModal-send">ОБРАТНАЯ СВЯЗЬ</a></li>
                                <li><a href="#openModal">КОНТАКТЫ</a></li>
                            </ul>
                    </nav>
            </header>
            <div id="openModal" className="modal">
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
								<li><a href="#openModal-send" className="fa-envelope"><img src={gmail} width="40px"/></a></li>
							</ul>
				</div>
				</div>
			</div>
		</div>
        <div id="openModal-send" className="modal"> 
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h3 className="modal-title">Обратная связь</h3>
						<a href="#close" title="Закрыть" className="close">×</a>
					</div>
					<div className="modal-body">    
					<form class="login-form" onSubmit={sendEmail}>
					<div class="form-input-material">
							<label>Ваше имя</label>
							<input type="text" name="sender_name" placeholder="Имя" value={sender_name} onChange={handleName} class="form_name" required />
						</div>
						<div class="form-input-material" style={{marginTop: 25}}>
							<label>Ваша почта</label>
							<input type="text" name="sender_email" placeholder="example@gmail.com" value={sender_email} onChange={handleEmail} class="form_email" required />
						</div>
						<div class="form-input-material" style={{marginTop: 25}}>
							<label>Сообщение</label>
							<textarea name="message" style={{width: 450, height: 250, fontSize: 16, borderRadius: 8, paddingLeft: 10, paddingRight: 10}} value={message} onChange={handleMessage} required placeholder='Ваш текст...'></textarea>
						</div>
						<button type="submit" class="button-search-form" style={{marginTop: 30, height: 50}}>Отправить</button>
						{/* <button href="#close" className="button-search-form" style={{width: 100, marginLeft: 100}}>Ок</button> */}
					</form>
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