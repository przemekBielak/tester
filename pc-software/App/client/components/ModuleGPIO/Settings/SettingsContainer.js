import React, { Component } from 'react';
import Settings from './Settings.js';

import store from '../../../store/store.js';
import { changeGPIOPullUp, ChangeGPIOVoltage, hideSettings } from '../../../actions/actions.js';

class SettingsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }

        this.updateItemPullUp = this.updateItemPullUp.bind(this);
        this.updateItemVoltage = this.updateItemVoltage.bind(this);
    }

    updateItemPullUp(itemID) {        
        store.dispatch(changeGPIOPullUp(this.props.deviceName, this.props.moduleID, itemID));   
    }

    updateItemVoltage(itemID) {
        store.dispatch(ChangeGPIOVoltage(this.props.deviceName, this.props.moduleID, itemID));
    }

    checkIfVisible() {
        if(store.getState().deviceName === deviceName && store.getState().moduleID === moduleID) {
            return true;
        }
    }

    render() {
        return (
            <Settings
                settingsVisible={store.getState().settingsVisible[this.props.deviceName + '_' + this.props.moduleID]}
                pullup={store.getState().pullup}
                voltage={store.getState().voltage}
                hideSettingsHandler={() => store.dispatch(hideSettings(this.props.deviceName, this.props.moduleID))}
                updateItemPullUpHandler={this.updateItemPullUp}
                updateItemVoltageHandler={this.updateItemVoltage}
                numOfLines={this.props.numOfLines}
            />
        )
    }

}

export default SettingsContainer;