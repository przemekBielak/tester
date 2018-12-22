
// settingsVisible: 1 - visible, 0 - not visible
export function showSettings() {
    return {
        type: 'SHOW_SETTINGS',
        settingsVisible: 1
    }
}

// settingsVisible: 1 - visible, 0 - not visible
export function hideSettings() {
    return {
        type: 'HIDE_SETTINGS',
        settingsVisible: 0
    }
}

export function changeGPIOPullUp(deviceName, moduleID, itemID, pullup) {
    return {
        type: 'CHANGE_GPIO_PULLUP',
        deviceName: deviceName,
        moduleID: moduleID,
        itemID: itemID,
        pullup: pullup
    }
}

export function ChangeGPIOVoltage(deviceName, moduleID, itemID, voltage) {
    return {
        type: 'CHANGE_GPIO_VOLTAGE',
        deviceName: deviceName,
        moduleID: moduleID,
        itemID: itemID,
        voltage: voltage
    }
}