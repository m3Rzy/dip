import '../../styles/feedback.css'

function FeedBackWidget(props) {
    return (props.trigger) ? (
        <div className='bg-feedback'>
            <div className='feedback'>
                <h1 className='feedback-h'>Обратная связь</h1>
                <a className='feedback-btn' onClick={() => props.setTrigger(false)}><p className='x-feedback'></p></a>
                <div className='line-feedback'></div>

                <div class="form-feedback" style={{marginTop: 30}}>
                    <label className='label-feedback'>Ваше имя</label>
                    <div className='parentfeedback'><input className='feedback-name' type="text" placeholder="Имя" required></input></div>
                </div>

                <div class="form-feedback" style={{marginTop: 80}}>
                    <label className='label-feedback' >Ваша почта</label>
                    <div className='parentfeedback'><input className='feedback-name' type="text" placeholder="example@gmail.com" required></input></div>
                </div>

                <div class="form-feedback" style={{marginTop: 80}}>
                    <label className='label-feedback' >Сообщение</label>
                    <div className='parentfeedback'><textarea className='textarea-feedback' name="message" style={{fontSize: 16, borderRadius: 8, paddingLeft: 10, paddingRight: 10}} required placeholder='Ваш текст...'></textarea></div>
                </div>

                <div className='parentfeedback' style={{marginTop: 30}}><a className='feedback-send'>Отправить</a></div>
                { props.children }
            </div>
        </div>
    ) : "";
}

export {FeedBackWidget}