export default (state, action) => {
    switch (action.type) {
        case 'CHANGE_GPIO_PULLUP':
            return {
                ...state,
                pullup: action.pullup
            }
        case 'CHANGE_GPIO_VOLTAGE':
            return {
                ...state,
                voltage: action.voltage
            }
        case 'SHOW_SETTINGS':
            return {
                ...state,
                settingsVisible: action.settingsVisible
            }
        case 'HIDE_SETTINGS':
            return {
                ...state,
                settingsVisible: action.settingsVisible
            }
        default: 
            return state;
    }
}