import React, { Component } from 'react';
import Settings from './Settings.js';
import store from '../../../store/store.js';

class SettingsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }

        this.updateItemPullUp = this.updateItemPullUp.bind(this);
        this.updateItemVoltage = this.updateItemVoltage.bind(this);
    }

    changePullup(val, itemID) {
        return {
            type: 'CHANGE_GPIO_PULLUP',
            deviceName: this.props.deviceName,
            moduleID: this.props.moduleID,
            itemID: itemID,
            pullup: val
        }
    }

    changeVoltage(val, itemID) {
        return {
            type: 'CHANGE_GPIO_VOLTAGE',
            deviceName: this.props.deviceName,
            moduleID: this.props.moduleID,
            itemID: itemID,
            voltage: val
        }
    }

    updateItemPullUp(itemID) {        
        if(store.getState().pullup === 'pull-up') {
            store.dispatch(this.changePullup('pull-down', itemID));
        }
        else {
            store.dispatch(this.changePullup('pull-up', itemID));
        }
    }

    updateItemVoltage(itemID) {
        if(store.getState().voltage === '3,3V') {
            store.dispatch(this.changeVoltage('5V', itemID));
        }
        else {
            store.dispatch(this.changeVoltage('3,3V', itemID));
        }
    }

    render() {
        return (
            <Settings
                settingsActive={this.props.settingsActive}
                hideSettingsHandler={this.props.hideSettingsHandler}
                numOfLines={this.props.numOfLines}
                pullup={store.getState().pullup}
                voltage={store.getState().voltage}
                updateItemPullUpHandler={this.updateItemPullUp}
                updateItemVoltageHandler={this.updateItemVoltage}
            />
        )
    }

}

export default SettingsContainer;