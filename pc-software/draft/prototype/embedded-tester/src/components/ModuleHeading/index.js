import React from 'react';
import styled from 'styled-components';

const ModuleHeadingWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    border: 1px solid blue;
`;

const ModuleHeading = (props) => (
    <ModuleHeadingWrapper>
        <h2>{props.moduleName}</h2>
        <button type='button'>Settings</button>
    </ModuleHeadingWrapper>
);

export default ModuleHeading;
