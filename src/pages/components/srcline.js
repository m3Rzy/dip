import '../../styles/family.css';



function SrcLine(props) {
    return (
        <>
            <div className="line-src"></div>
            <div style={{marginTop: 50}}>
                <div className='src-div'>👀  Источники:</div>
                <ol className='src-ol'>
                    {/* <li><a href="#">Первый источник...</a></li>
                    <li><a href="#">Второй источник...</a></li>
                    <li><a href="#">Третий источник...</a></li>
                    <li><a href="#">Четвертый источник...</a></li> */}
                    {props.children}
                </ol>
            </div>
        </>
            
    )
}

export {SrcLine};