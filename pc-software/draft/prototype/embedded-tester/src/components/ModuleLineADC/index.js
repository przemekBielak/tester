import React from 'react';
import styled from 'styled-components';

const ModuleLineWrapper = styled.div `
    display: flex;
    justify-content: flex-start;
    border: 1px solid green;
    margin: 2px 0px;
`;

const ModuleLineNumberWrapper = styled.p `
    width: 35px;
`;

const ModuleLineADC = (props) => (
    <ModuleLineWrapper>
            <ModuleLineNumberWrapper>{props.moduleLineNumber}.</ModuleLineNumberWrapper>
            <ModuleLineNumberWrapper>3.1415</ModuleLineNumberWrapper>
    </ModuleLineWrapper>
);

export default ModuleLineADC;
