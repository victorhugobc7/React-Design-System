function ActionButton(buttonText){
    return ( 
        <button type="button" className={chooseStyle() + ' buttonStyle'}>{buttonText}</button>
    )
}

function chooseStyle(style){
    switch(style){
        case primary: return 'primaryActionButton'
    }
}

export default ActionButton