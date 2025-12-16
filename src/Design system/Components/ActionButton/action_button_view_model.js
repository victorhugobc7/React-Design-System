export function viewModel(style){
    return(styleSwitcher(style))
}

function styleSwitcher(style){
    switch(style){
        case 'primary': return ('primaryActionButton')
        case 'secondary': return ('secondaryActionButton')
        case 'tertiary': return ('tertiaryActionButton')
        case 'warning': return ('warningActionButton')
        case 'negative': return ('negativeActionButton')
        case 'disabled': return ('disabledActionButton')

        default: return ('primaryActionButton')
    }
}