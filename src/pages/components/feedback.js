import '../../styles/feedback.css'
import emailjs, { send } from 'emailjs-com';
import { useState } from 'react'
import { message } from 'antd';

function success() {
    message.success('Письмо успешно отправлено!');
  };

function error(text) {
     return (
         <div style={{marginTop: 100}}>{message.error(text)}</div>
     );
  };

function FeedBackWidget(props) {
    
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
        console.log(sender_email, sender_name)
        if(sender_name.length == 0) {
            error('Имя не может быть пустым!')
            return
        }
        else if(sender_email.length == 0) {
            error('Почта не может быть пустой!')
            return
        }
        else if(message.length == 0) {
            error('Сообщение не может быть пустым!')
            return
        }
        else {
		e.preventDefault()
		send(
			'service_z2k86wh',
			'template_olsgytm',
			{sender_name, sender_email, message},
			'_EYcCDdury5UIBogr'
		)
        
        props.setTrigger(false)
        success()
	}}

    return (props.trigger) ? (
        <div className='bg-feedback'>
            <div className='feedback'>
                <h1 className='feedback-h'>Обратная связь</h1>
                <a className='feedback-btn' onClick={() => props.setTrigger(false)}><p className='x-feedback'></p></a>
                <div className='line-feedback'></div>

                <div class="form-feedback" style={{marginTop: 30}}>
                    <label className='label-feedback'>Ваше имя</label>
                    <div className='parentfeedback'><input type="text" className='feedback-name' value={sender_name} onChange={handleName} placeholder="Имя" required></input></div>
                </div>

                <div class="form-feedback" style={{marginTop: 80}}>
                    <label className='label-feedback' >Ваша почта</label>
                    <div className='parentfeedback'><input className='feedback-name' type="text" value={sender_email} onChange={handleEmail} placeholder="example@gmail.com" required></input></div>
                </div>

                <div class="form-feedback" style={{marginTop: 80}}>
                    <label className='label-feedback' >Сообщение</label>
                    <div className='parentfeedback'><textarea className='textarea-feedback' type="text" value={message} onChange={handleMessage} name="message" style={{fontSize: 16, borderRadius: 8, paddingLeft: 10, paddingRight: 10}} required placeholder='Ваш текст...'></textarea></div>
                </div>

                <div className='parentfeedback' style={{marginTop: 30}}><a className='feedback-send' onClick={sendEmail}>Отправить</a></div>
                { props.children }
            </div>
        </div>
    ) : "";
}

export {FeedBackWidget}