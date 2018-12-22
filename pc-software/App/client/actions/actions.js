
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

export function changeGPIOPullUp(deviceName, moduleID, itemID, pullup) {
    return {
        type: 'CHANGE_GPIO_PULLUP',
        deviceName: deviceName,
        moduleID: moduleID,
        itemID: itemID,
    }
}

export function ChangeGPIOVoltage(deviceName, moduleID, itemID) {
    return {
        type: 'CHANGE_GPIO_VOLTAGE',
        deviceName: deviceName,
        moduleID: moduleID,
        itemID: itemID,
    }
}