import React from 'react';
import styled from 'styled-components';

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


const ModuleLineGPIO = (props) => (
    <ModuleLineWrapper>
        <ModuleLineBeginningWrapper>
            <ModuleLineNumberWrapper>{props.moduleLineNumber}.</ModuleLineNumberWrapper>
            <button type='button'>IN/OUT</button>
        </ModuleLineBeginningWrapper>
        <p >LOW</p>
    </ModuleLineWrapper>
);

export default ModuleLineGPIO;
