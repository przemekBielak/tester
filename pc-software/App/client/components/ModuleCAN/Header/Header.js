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
    font-size: 18px;
    font-weight: bold;
    color: #000;
    background-color: #fff;
    text-align:center;
    border: none;
    border-radius: 7px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    outline:none
`;


function Header(props) {
    return (
        <ModuleHeadingWrapper>
            <h2>CAN</h2>
            <ModuleHeadingSettingsButton 
                onClick={() => props.showSettingsHandler()}
            >
                Settings
            </ModuleHeadingSettingsButton>
        </ModuleHeadingWrapper>
    );
}

export default Header;