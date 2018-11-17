import React, { Component } from 'react';
import ItemContainer from './Item/ItemContainer.js';
import SettingsContainer from './Settings/SettingsContainer.js';
import styled from 'styled-components';

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

class ModuleGPIO extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    //TODO move to ItemContainer
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
                <ModuleHeadingWrapper>
                    <h2>GPIO</h2>
                    <button 
                        type='button' 
                        onClick={() => this.handleShowSettings()}
                    >
                        Settings
                    </button>
                </ModuleHeadingWrapper>

                {this.createItemContainers(this.props.numOfLines, this.props.deviceName, this.props.moduleID)}

                <SettingsContainer numOfLines={this.props.numOfLines} />
            
            </ModuleWrapper>
        );
    }
}

export default ModuleGPIO;
