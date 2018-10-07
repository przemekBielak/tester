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

// Type definitions

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
                GPIOTypeEnum.IN
            ],
        };

        this.handleGPIOType = this.handleGPIOType.bind(this);
    }

    getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    createGPIOLineData = (GPIOnum) => {
        if(this.state.GPIOType[GPIOnum] === GPIOTypeEnum.IN) {
            return (
                <p>LOW</p>
            );
        }
        else if(this.state.GPIOType[GPIOnum] === GPIOTypeEnum.OUT) {
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

    handleGPIOType(GPIOnum) {
        let GPIOType = [...this.state.GPIOType];  

        if(this.state.GPIOType[GPIOnum] === GPIOTypeEnum.IN) {
            GPIOType[GPIOnum] = GPIOTypeEnum.OUT;
        }
        else {
            GPIOType[GPIOnum] = GPIOTypeEnum.IN;
        }
        this.setState({GPIOType: GPIOType,});

        console.log(this.state.GPIOType);
    }

    render() {
        return (
            <ModuleWrapper>
            <ModuleHeading moduleName = 'GPIO'/>

            {this.createGPIOlines(this.props.numOfLines)}
            </ModuleWrapper>
        );
    }
}

export default ModuleGPIO;
