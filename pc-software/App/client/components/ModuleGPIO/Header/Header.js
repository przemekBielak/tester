import React from 'react';
import styled from 'styled-components';

const ModuleHeadingWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    padding: 10px;
    font-weight: bold;
    font-size: 20px;
`;

const ModuleHeadingSettingsButton = styled.button `
    width: 100px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: #bbc4ef;
    text-align:center;
    border: none;
    border-radius: 10px;
`;


function Header(props) {
    return (
        <ModuleHeadingWrapper>
            <h2>GPIO</h2>
            <ModuleHeadingSettingsButton 
                onClick={() => props.showSettingsHandler()}
            >
                Settings
            </ModuleHeadingSettingsButton>
        </ModuleHeadingWrapper>
    );
}

export default Header;