import React, { Component } from 'react';
import Settings from './Settings.js'


class SettingsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            settingsActive: 1,
        }

        this.hideSettingsHandler = this.hideSettingsHandler.bind(this);
        this.showSettingsHandler = this.showSettingsHandler.bind(this);
    }

    showSettingsHandler() {
        this.setState({settingsActive: 1});
    }

    hideSettingsHandler() {
        this.setState({settingsActive: 0});
    }

    render() {
        return (
            <Settings
                settingsActive={this.state.settingsActive}
                hideSettingsHandler={this.hideSettingsHandler}
                showSettingsHandler={this.showSettingsHandler}
                numOfLines={this.props.numOfLines}
            />
        )
    }

}

export default SettingsContainer;