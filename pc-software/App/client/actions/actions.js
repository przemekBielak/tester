
// settingsVisible: 1 - visible, 0 - not visible
export function showSettings(moduleID) {
    return {
        type: 'SHOW_SETTINGS',
        id: moduleID,
    }
}

// settingsVisible: 1 - visible, 0 - not visible
export function hideSettings(moduleID) {
    return {
        type: 'HIDE_SETTINGS',
        id: moduleID,
    }
}

export function showGraph(moduleID) {
    return {
        type: 'SHOW_GRAPH',
        id: moduleID,
    }
}

// settingsVisible: 1 - visible, 0 - not visible
export function hideGraph(moduleID) {
    return {
        type: 'HIDE_GRAPH',
        id: moduleID,
    }
}

export function changeGPIOPullUp(moduleID, itemID) {
    return {
        type: 'CHANGE_GPIO_PULLUP',
        id: moduleID + '_' + itemID,
    }
}

export function ChangeGPIOVoltage(moduleID, itemID) {
    return {
        type: 'CHANGE_GPIO_VOLTAGE',
        id: moduleID + '_' + itemID,
    }
}