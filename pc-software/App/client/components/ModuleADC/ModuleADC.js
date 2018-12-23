import React, { Component } from 'react';
import styled from 'styled-components';

import ItemContainer from './Item/ItemContainer.js';
import SettingsContainer from './Settings/SettingsContainer.js';
import HeaderContainer from './Header/HeaderContainer.js';


const ModuleWrapper = styled.div `
    margin-bottom: 10px;
    margin-top: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 15px;
    font-family: 'IBM Plex Sans Condensed', sans-serif;
`;


class ModuleADC extends Component {

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

    createADClines(moduleID, numOfLines) {
        let table = []
    
        for (let i = 0; i < numOfLines; i++) {
            table.push(
                <ItemContainer 
                    moduleID={moduleID} 
                    itemID={i} 
                    key={i}
                />
            );
        }
        return table;
    }

    render() {
        return(
            <ModuleWrapper>

                <HeaderContainer
                    showSettingsHandler={this.showSettingsHandler}
                />

                {this.createADClines(this.props.moduleID, this.props.numOfLines)}
                
                <SettingsContainer
                    settingsActive={this.state.settingsActive}
                    hideSettingsHandler={this.hideSettingsHandler}
                    numOfLines={this.props.numOfLines}
                />

            </ModuleWrapper>
        );
    }
}

export default ModuleADC;
