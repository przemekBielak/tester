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
    justify-content: flex-start;
    border: 1px solid green;
    margin: 2px 0px;
`;

const ModuleLineNumberWrapper = styled.p `
    width: 35px;
`;

// Create ADC lines
const createADClines = (numOfLines) => {
    let table = []

    for (let i = 0; i < numOfLines; i++) {
        table.push(
            <ModuleLineWrapper>
                <ModuleLineNumberWrapper>{i}.</ModuleLineNumberWrapper>
                <ModuleLineNumberWrapper>3.1415</ModuleLineNumberWrapper>
            </ModuleLineWrapper>
        );
    }
    return table;
}

const ModuleADC = (props) => (
    <ModuleWrapper>
        <ModuleHeading moduleName = 'ADC'/>

        {createADClines(props.numOfLines)}
    </ModuleWrapper>
);

export default ModuleADC;
