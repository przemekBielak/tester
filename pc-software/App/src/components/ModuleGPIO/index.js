import React from 'react';
import ModuleHeading from '../ModuleHeading';
import styled from 'styled-components';

const ModuleWrapper = styled.div `
    margin-bottom: 10px;
    margin-top: 10px;
    border: solid 1px black;
`;

const ModuleLineWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    border: 1px solid green;
    margin: 2px 0px;
`;

const ModuleLineBeginningWrapper = styled.div `
    display: flex;
    justify-content: flex-start;
`;

const ModuleLineNumberWrapper = styled.p `
    width: 35px;
`;

// Create GPIO lines
const createGPIOlines = (numOfLines) => {
    let table = []

    for (let i = 0; i < numOfLines; i++) {
        table.push(
            <ModuleLineWrapper key={i}>
                <ModuleLineBeginningWrapper>
                    <ModuleLineNumberWrapper>{i}.</ModuleLineNumberWrapper>
                    <button type='button'>IN/OUT</button>
                </ModuleLineBeginningWrapper>
                <p >LOW</p>
            </ModuleLineWrapper>
        );
    }
    return table;
}

const ModuleGPIO = (props) => (
    <ModuleWrapper>
        <ModuleHeading moduleName = 'GPIO'/>

        {createGPIOlines(props.numOfLines)}
    </ModuleWrapper>
);

export default ModuleGPIO;
