export default (state, action) => {
    switch (action.type) {
        case 'CHANGE_GPIO_PULLUP':
            return {
                ...state,
                pullup: action.pullup
            }
        default: 
            return state;
    }
}