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
        store.dispatch(changeGPIOPullUp(this.props.moduleID, itemID));   
    }

    updateItemVoltage(itemID) {
        store.dispatch(ChangeGPIOVoltage(this.props.moduleID, itemID));
    }

    render() {
        return (
            <Settings
                settingsVisible={store.getState().settingsVisible[this.props.moduleID]}
                pullup={store.getState().pullup}
                voltage={store.getState().voltage}
                hideSettingsHandler={() => store.dispatch(hideSettings(this.props.moduleID))}
                updateItemPullUpHandler={this.updateItemPullUp}
                updateItemVoltageHandler={this.updateItemVoltage}
                numOfLines={this.props.numOfLines}
                moduleID={this.props.moduleID}
            />
        )
    }

}

export default SettingsContainer;