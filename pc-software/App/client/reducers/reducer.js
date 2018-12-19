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
        default: 
            return state;
    }
}