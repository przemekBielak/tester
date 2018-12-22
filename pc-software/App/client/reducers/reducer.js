export default (state, action) => {
    switch (action.type) {
        case 'CHANGE_GPIO_PULLUP':
            return {
                ...state,
                pullup: {
                    ...state.pullup,
                    [action.id]: !state.pullup[action.id]
                }
            }
        case 'CHANGE_GPIO_VOLTAGE':
            return {
                ...state,
                voltage: {
                    ...state.voltage,
                    [action.id]: !state.voltage[action.id]
                }
            }
        case 'SHOW_SETTINGS':
            return {
                ...state,
                settingsVisible: {
                    ...state.settingsVisible,
                    [action.id]: true,
                }
            }
        case 'HIDE_SETTINGS':
            return {
                ...state,
                settingsVisible: {
                    ...state.settingsVisible,
                    [action.id]: false,
                } 
            }
        default: 
            return state;
    }
}