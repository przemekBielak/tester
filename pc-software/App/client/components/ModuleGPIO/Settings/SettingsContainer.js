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
        if(store.getState().pullup === 'pull-up') {
            store.dispatch(changeGPIOPullUp(this.props.deviceName, this.props.moduleID, itemID, 'pull-down'));   
        }
        else {
            store.dispatch(changeGPIOPullUp(this.props.deviceName, this.props.moduleID, itemID, 'pull-up'));
        }
    }

    updateItemVoltage(itemID) {
        if(store.getState().voltage === '3,3V') {
            store.dispatch(ChangeGPIOVoltage(this.props.deviceName, this.props.moduleID, itemID, '5V'));
        }
        else {
            store.dispatch(ChangeGPIOVoltage(this.props.deviceName, this.props.moduleID, itemID, '3.3V'));
        }
    }

    render() {
        return (
            <Settings
                settingsActive={store.getState().settingsVisible}
                pullup={store.getState().pullup}
                voltage={store.getState().voltage}
                hideSettingsHandler={() => store.dispatch(hideSettings())}
                updateItemPullUpHandler={this.updateItemPullUp}
                updateItemVoltageHandler={this.updateItemVoltage}
                numOfLines={this.props.numOfLines}
            />
        )
    }

}

export default SettingsContainer;