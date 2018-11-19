import React, { Component } from 'react';
import styled from 'styled-components';

import ItemContainer from './Item/ItemContainer.js';
import SettingsContainer from './Settings/SettingsContainer.js';
import HeaderContainer from './Header/HeaderContainer.js';

const ModuleWrapper = styled.div `
    margin-bottom: 10px;
    margin-top: 10px;
    border: solid 1px black;
`;


class ModuleGPIO extends Component {
    constructor(props) {
        super(props);

        this.state = {
            settingsActive: 0,
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

    createItemContainers(numOfLines, deviceName, moduleID) {
        let table = []

        for (let i = 0; i < numOfLines; i++) {
            table.push(
                <ItemContainer 
                    deviceName={deviceName} 
                    moduleID={moduleID} 
                    itemID={i} 
                    key={i}
                />
            );
        }
        return table;
    }

    render() {
        return (
            <ModuleWrapper>
                
                <HeaderContainer 
                    showSettingsHandler={this.showSettingsHandler}
                />

                {this.createItemContainers(this.props.numOfLines, this.props.deviceName, this.props.moduleID)}

                <SettingsContainer 
                    settingsActive={this.state.settingsActive}
                    hideSettingsHandler={this.hideSettingsHandler}
                    numOfLines={this.props.numOfLines}
                />
            
            </ModuleWrapper>
        );
    }
}

export default ModuleGPIO;
