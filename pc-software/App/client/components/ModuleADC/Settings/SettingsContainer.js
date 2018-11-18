import React, {Component} from 'react';
import Settings from './Settings.js';

class SettingsContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Settings 
                settingsActive={this.props.settingsActive}
                hideSettingsHandler={this.props.hideSettingsHandler}
                numOfLines={this.props.numOfLines}
            />
        );
    }
}

export default SettingsContainer;