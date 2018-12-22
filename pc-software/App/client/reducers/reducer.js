export default (state, action) => {
    switch (action.type) {
        case 'CHANGE_GPIO_PULLUP':
            return {
                ...state,
                pullup: !state.pullup
            }
        case 'CHANGE_GPIO_VOLTAGE':
            return {
                ...state,
                voltage: !state.voltage
            }
        case 'SHOW_SETTINGS':
            return {
                ...state,
                settingsVisible: action.settingsVisible,
                deviceName: action.deviceName,
                moduleID: action.moduleID
            }
        case 'HIDE_SETTINGS':
            return {
                ...state,
                settingsVisible: action.settingsVisible,
                deviceName: action.deviceName,
                moduleID: action.moduleID
            }
        default: 
            return state;
    }
}