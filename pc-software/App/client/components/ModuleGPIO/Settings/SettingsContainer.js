import React, { Component } from 'react';
import Settings from './Settings.js'


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

    updateItemPullUp() {
        if(this.state.pullup === 'pull-up') {
            this.setState({
                pullup: 'pull-down'
            });
        }
        else {
            this.setState({
                pullup: 'pull-up'
            });
        }
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
                pullup={this.state.pullup}
                voltage={this.state.voltage}
                updateItemPullUpHandler={this.updateItemPullUp}
                updateItemVoltageHandler={this.updateItemVoltage}
            />
        )
    }

}

export default SettingsContainer;