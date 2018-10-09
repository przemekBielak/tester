import React, { Component } from 'react';
import ModuleHeading from '../ModuleHeading';
import styled from 'styled-components';

// Styling

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

const ModuleLineInput = styled.input `
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
    width: 100%; 
    height: 100%; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5); 
    z-index: 2; 
    cursor: pointer;
`;

// Type definitions

const GPIOValEnum = {
    LOW: 0,
    HIGH: 1,
}

const GPIOTypeEnum = {
    IN: 0,
    OUT: 1,
};

class ModuleGPIO extends Component {
    constructor(props) {
        super(props);

        this.state = {
            GPIOType: [
                GPIOTypeEnum.IN,
                GPIOTypeEnum.IN,
                GPIOTypeEnum.IN,
                GPIOTypeEnum.IN,
                GPIOTypeEnum.IN,
                GPIOTypeEnum.IN,
                GPIOTypeEnum.IN,
                GPIOTypeEnum.IN,
                GPIOTypeEnum.IN,
                GPIOTypeEnum.IN,
                GPIOTypeEnum.IN,
                GPIOTypeEnum.IN,
                GPIOTypeEnum.IN,
                GPIOTypeEnum.IN,
                GPIOTypeEnum.IN,
            ],
            GPIOVal: [
                GPIOValEnum.LOW,
                GPIOValEnum.HIGH,
                GPIOValEnum.HIGH,
                GPIOValEnum.LOW,
                GPIOValEnum.HIGH,
                GPIOValEnum.HIGH,
                GPIOValEnum.LOW,
                GPIOValEnum.LOW,
                GPIOValEnum.HIGH,
                GPIOValEnum.HIGH,
                GPIOValEnum.LOW,
                GPIOValEnum.LOW,
                GPIOValEnum.LOW,
                GPIOValEnum.LOW,
                GPIOValEnum.LOW,
            ],
            settingsActive: 0,
        };

        this.handleGPIOType = this.handleGPIOType.bind(this);
    }

    getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    createGPIOLineData = (GPIONum) => {
        if(this.state.GPIOType[GPIONum] === GPIOTypeEnum.IN) {
            return (
                <p>{this.getKeyByValue(GPIOValEnum, this.state.GPIOVal[GPIONum])}</p>
            );
        }
        else if(this.state.GPIOType[GPIONum] === GPIOTypeEnum.OUT) {
            return (
                <ModuleLineInput type='text'/>
            );
        }
    }

    createGPIOlines = (numOfLines) => {
        let table = []

        for (let i = 0; i < numOfLines; i++) {
            table.push(
                <ModuleLineWrapper key={i}>
                    <ModuleLineBeginningWrapper>
                        <ModuleLineNumberWrapper>{i}.</ModuleLineNumberWrapper>
                        <button type='button' onClick={
                            () => this.handleGPIOType(i)}>
                            {this.getKeyByValue(GPIOTypeEnum, this.state.GPIOType[i])}
                        </button>
                    </ModuleLineBeginningWrapper>
                    {this.createGPIOLineData(i)}
                </ModuleLineWrapper>
            );
        }
        return table;
    }

    createSettingsOverlay = () => {
        if(this.state.settingsActive === 0) {
            // return();
        }
        else if(this.state.settingsActive === 1) {
            return (
                <SettingsOverlay>
                    <button type='button' onClick={
                        () => this.handleHideSettings()
                    }>X</button>
                </SettingsOverlay>
            );
        }
    }

    handleGPIOType(GPIOnum) {
        let GPIOType = [...this.state.GPIOType];  

        if(this.state.GPIOType[GPIOnum] === GPIOTypeEnum.IN) {
            GPIOType[GPIOnum] = GPIOTypeEnum.OUT;
        }
        else {
            GPIOType[GPIOnum] = GPIOTypeEnum.IN;
        }
        this.setState({GPIOType: GPIOType,});
    }

    handleShowSettings() {
        console.log(this.state.settingsActive);
        this.setState({settingsActive: 1});
    }

    handleHideSettings() {
        console.log(this.state.settingsActive);
        this.setState({settingsActive: 0});
    }

    render() {
        return (
            <ModuleWrapper>
                <ModuleHeadingWrapper>
                    <h2>GPIO</h2>
                    <button type='button' onClick={
                        () => this.handleShowSettings()
                    }>Settings</button>
                </ModuleHeadingWrapper>

                {this.createGPIOlines(this.props.numOfLines)}

                {/* Setting overlay view */}
                {this.createSettingsOverlay()}
            </ModuleWrapper>
        );
    }
}

export default ModuleGPIO;
