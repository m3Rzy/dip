

function FooterWidget(props) {
    return ( 
        <ul className='datewidget-ul'>
            {props.children}
        </ul>
    )
}

export {FooterWidget}