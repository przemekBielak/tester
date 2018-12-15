import React, { Component } from 'react';
import Settings from './Settings.js';
import store from '../../../store/store.js';

class SettingsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pullup: 'pull-up',
            voltage: '3,3V',
        }

        this.updateItemPullUp = this.updateItemPullUp.bind(this);
        this.updateItemVoltage = this.updateItemVoltage.bind(this);
    }

    changePullup(val) {
        return {
            type: 'CHANGE_GPIO_PULLUP',
            pullup: val
        }
    }

    updateItemPullUp() {
        if(store.getState().pullup === 'pull-up') {
            store.dispatch(this.changePullup('pull-down'))
        }
        else {
            store.dispatch(this.changePullup('pull-up'))
        }

        console.log(store.getState().pullup);
    }

    updateItemVoltage() {
        if(this.state.voltage === '3,3V') {
            this.setState({
                voltage: '5V'
            });
        }
        else {
            this.setState({
                voltage: '3,3V'
            });
        }
    }

    render() {
        return (
            <Settings
                settingsActive={this.props.settingsActive}
                hideSettingsHandler={this.props.hideSettingsHandler}
                numOfLines={this.props.numOfLines}
                pullup={store.getState().pullup}
                voltage={this.state.voltage}
                updateItemPullUpHandler={this.updateItemPullUp}
                updateItemVoltageHandler={this.updateItemVoltage}
            />
        )
    }

}

export default SettingsContainer;