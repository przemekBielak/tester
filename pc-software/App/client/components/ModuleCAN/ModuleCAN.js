import React, { Component } from 'react';
import styled from 'styled-components';

import ItemContainer from './Item/ItemContainer.js';
import SettingsContainer from './Settings/SettingsContainer.js';
import HeaderContainer from './Header/HeaderContainer.js';

import store from '../../store/store.js';

const ModuleWrapper = styled.div `
    margin-bottom: 10px;
    margin-top: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 15px;
    font-family: 'IBM Plex Sans Condensed', sans-serif;
`;


class ModuleCAN extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    createItemContainers(numOfLines, moduleID) {
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
        return (
            <ModuleWrapper>
                
                <HeaderContainer 
                    moduleID={this.props.moduleID} 
                />

                {this.createItemContainers(this.props.numOfLines, this.props.moduleID)}

                <SettingsContainer 
                    moduleID={this.props.moduleID} 
                    numOfLines={this.props.numOfLines}
                />
            
            </ModuleWrapper>
        );
    }
}

export default ModuleCAN;
