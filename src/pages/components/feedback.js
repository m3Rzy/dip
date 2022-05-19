

function FeedBackWidget() {
    return (
        <>
            <section className='feedback-window'>
                <div className='feedback-block'>
                    <ul className='feedback-lu'>
                        <li className='feedback-li' id='1'><h3 className='feedback-h'>Обратная связь</h3></li>
                        <li className='feedback-li' id='2'><a className='feedback-close'>x</a></li>
                    </ul>
                    
                    <div className="line-src" style={{marginTop: -10}}></div>
                    
                </div>
            </section>
        </>
    )
}

export {FeedBackWidget}