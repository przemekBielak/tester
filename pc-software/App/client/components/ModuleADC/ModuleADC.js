import React, { Component } from 'react';
import styled from 'styled-components';

import ItemContainer from './Item/ItemContainer.js';
import SettingsContainer from './Settings/SettingsContainer.js';


const ModuleWrapper = styled.div `
    margin-bottom: 10px;
    margin-top: 10px;
    border: solid 1px black;
`;

const ModuleHeadingWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    border: 1px solid blue;
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

    createADClines(deviceName, moduleID, numOfLines) {
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
        return(
            <ModuleWrapper>
                <ModuleHeadingWrapper>
                    <h2>ADC</h2>
                    <button 
                        type='button'
                        onClick={() => this.showSettingsHandler()}
                    >
                        Settings
                    </button>
                </ModuleHeadingWrapper>

                {this.createADClines(this.props.deviceName, this.props.moduleID, this.props.numOfLines)}
                
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
