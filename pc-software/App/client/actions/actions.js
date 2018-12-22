
// settingsVisible: 1 - visible, 0 - not visible
export function showSettings(deviceName, moduleID) {
    return {
        type: 'SHOW_SETTINGS',
        id: deviceName + '_' + moduleID,
    }
}

// settingsVisible: 1 - visible, 0 - not visible
export function hideSettings(deviceName, moduleID) {
    return {
        type: 'HIDE_SETTINGS',
        id: deviceName + '_' + moduleID,
    }
}

export function changeGPIOPullUp(deviceName, moduleID, itemID) {
    return {
        type: 'CHANGE_GPIO_PULLUP',
        id: deviceName + '_' + moduleID + '_' + itemID,
    }
}

export function ChangeGPIOVoltage(deviceName, moduleID, itemID) {
    return {
        type: 'CHANGE_GPIO_VOLTAGE',
        id: deviceName + '_' + moduleID + '_' + itemID,
    }
}