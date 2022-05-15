import '../../styles/family.css'
import '../../styles/allObjects.css'
import telephone from '../../assets/tp.png'
import gps from '../../assets/gps.png'
import email from '../../assets/email.png'
import vk from '../../assets/posts/vk.png';
import gmail from '../../assets/posts/gmail.png';
import tg from '../../assets/posts/tg.png'
import yt from '../../assets/posts/yt.png'
import sitmo from '../../assets/logo-full.png';
import emailjs, { send } from 'emailjs-com';
import { useState } from 'react'


function Footer() {
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
    return (
        <>
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
        <div className="footer-pooper">
                <footer class="footer-distributed">
                    <div class="footer-left">
                        <img src={sitmo} width="200px" alt="" className="logo_img_footer" style={{marginTop: -70, marginLeft: 40}}/>
                        <p class="footer-links" style={{marginTop: -20}}>
                            <a href="/" class="link-1" style={{marginLeft: 20}}>Главная</a>
                            <a href="#openModal-send" style={{marginLeft: 20}}>Обратная связь</a>
                            <a href="#openModal" style={{marginLeft: 20}}>Контакты</a>
                            
                        </p>
                        
                        
                    </div>
                    
                    <div class="footer-center">
                        <div>
                        <i><img src={gps} width="22px" className='footer-i'/></i> 
                            <p><span>Кронверский проспект, д. 49</span>г. Санкт-Петербург, Российская Федерация</p>
                        </div>
                        <div>
                        <i><img src={telephone} width="20px" className='footer-i'/></i> 
                            <p>+7 (812) 480-04-80</p>
                        </div>
                        <div>
                        <i><img src={email} width="20px" className='footer-i'/></i> 
                            <p><a>abit@itmo.ru</a></p>
                        </div>
                    </div>
                    <div class="footer-right">
                        <p class="footer-company-about">
                            <span>О сайте</span>
                            Сайт представляет собой набор исторических и информационных фактов для ознакомления.
                        </p>
                        <div class="footer-icons">
                            <a href="https://vk.com/itmoru"><img src={vk} width="40px"/></a>
                            <a href="#openModal-send"><img src={gmail} width="40px" style={{marginLeft: 20}}/></a>
                            <a href="https://t.me/itmoru"><img src={tg} width="40px" style={{marginLeft: 20}}/></a>
                            <a href="https://www.youtube.com/c/IfmoRu"><img src={yt} width="40px" style={{marginLeft: 20}}/></a>
                        </div>
                    </div>
                    <div className="line-footer"></div>
                    <p class="footer-company-name" style={{marginTop: 20}}>Университет ИТМО ©</p>
                    
                </footer>
            </div>
            </>
    )
}

export {Footer};