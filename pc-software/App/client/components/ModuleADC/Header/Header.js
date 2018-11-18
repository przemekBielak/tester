import React from 'react';
import styled from 'styled-components';

const ModuleHeadingWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    border: 1px solid blue;
`;

function Header(props) {
    return (
        <ModuleHeadingWrapper>
            <h2>ADC</h2>
            <button 
                onClick={() => props.showSettingsHandler()}
            >
                Settings
            </button>
        </ModuleHeadingWrapper>
    );
}

export default Header;