import styles from './action_button.module.css'
import {viewModel} from './action_button_view_model'

function ActionButton(props){
    let buttonText = props.title
    let chosenStyle = props.style
    let buttonFunction = props.function

    return ( 
        <button type="button"
        onClick={buttonFunction}
        className={ 
            styles[viewModel(chosenStyle)] + ' ' + 
            styles.buttonStyle + ' '
        }>
        {buttonText.toUpperCase()}
        </button>
    )
}

export default ActionButton