import React, { Component } from 'react';
import GPIOModuleItem from'./Item';
import styled from 'styled-components';

const ModuleWrapper = styled.div `
    margin-bottom: 10px;
    margin-top: 10px;
    border: solid 1px black;
`;

const ModuleLineWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    flex-wrap:nowrap;
    border: 1px solid green;
    margin: 2px 0px;
    height: 35px;
`;

const ModuleLineBeginningWrapper = styled.div `
    display: flex;
    justify-content: flex-start;
`;

const ModuleLineNumberWrapper = styled.p `
    width: 35px;
`;

const ModuleHeadingWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    border: 1px solid blue;
`;

const SettingsOverlay = styled.div `
    position: fixed; 
    display: block; 
    margin: auto auto;
    padding: 10px 10px;
    width: 500px; 
    height: auto; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 3px solid green; 
    z-index: 1; 
`;

const SettingsOverlayContent = styled.div `
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
    border: 3px solid purple; 
`;

const SettingsOverlayHeader = styled.div `
    display: flex;
    justify-content: space-between;
    border: 1px solid blue;
`;

class ModuleGPIO extends Component {
    constructor(props) {
        super(props);

        this.state = {
            settingsActive: 0,
        };
    }

    createGPIOModuleItems(numOfLines) {
        let table = []

        for (let i = 0; i < numOfLines; i++) {
            table.push(
                <GPIOModuleItem moduleID='1' itemID={i} key={i}/>
            );
        }
        return table;
    }

    createSettingslines(numOfLines) {
        let table = []

        for (let i = 0; i < numOfLines; i++) {
            table.push(
                <ModuleLineWrapper key={i}>
                    <ModuleLineBeginningWrapper>
                        <ModuleLineNumberWrapper>{i}.</ModuleLineNumberWrapper>
                    </ModuleLineBeginningWrapper>
                    <button type='button'>pull-up/pull-down</button>
                    <button type='button'>3.3V/5V</button>
                </ModuleLineWrapper>
            );
        }
        return table;
    }

    createSettingsOverlay() {
        if(this.state.settingsActive === 0) {
            // return();
        }
        else if(this.state.settingsActive === 1) {
            return (
                <SettingsOverlay>
                    <SettingsOverlayContent>
                        <SettingsOverlayHeader>
                            <h2>GPIO Settings</h2>
                            <button type='button' onClick={
                                () => this.handleHideSettings()
                            }>Close</button>
                        </SettingsOverlayHeader>
                        {this.createSettingslines(this.props.numOfLines)}
                    </SettingsOverlayContent>
                </SettingsOverlay>
            );
        }
    }

    handleShowSettings() {
        this.setState({settingsActive: 1});
    }

    handleHideSettings() {
        this.setState({settingsActive: 0});
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

                {this.createGPIOModuleItems(this.props.numOfLines)}

                {/* Setting overlay view */}
                {this.createSettingsOverlay()}
            </ModuleWrapper>
        );
    }
}

export default ModuleGPIO;
