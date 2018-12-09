import React from 'react';
import styled from 'styled-components';

const SettingsOverlay = styled.div `
    position: fixed; 
    display: block; 
    margin: auto auto;
    padding: 10px 10px;
    width: 500px; 
    height: auto; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1; 
`;

const SettingsOverlayContent = styled.div `
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 15px;
    font-family: 'IBM Plex Sans Condensed', sans-serif;
`;

const SettingsOverlayHeader = styled.div `
    display: flex;
    justify-content: space-between;
    padding: 10px;
    font-weight: bold;
    font-size: 20px;
`;

const ModuleLineWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    flex-wrap:nowrap;
    padding: 5px 10px ;
    font-weight: normal;
    font-size: 16px;
    height: 30px;
`;

const ModuleLineBeginningWrapper = styled.div `
    display: flex;
    justify-content: flex-start;
`;

const ModuleLineNumberWrapper = styled.p `
    width: 35px;
`;

const ModuleHeadingCloseButton = styled.button `
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

const ChangePullUpButtonWrapper = styled.button `
    width: 200px;
    font-weight: normal;
    color: #000;
    background-color: #fff;
    text-align:center;
    border: none;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    outline:none
`;

const ChangeVoltageButtonWrapper = styled.button `
    width: 100px;
    font-weight: normal;
    color: #000;
    background-color: #fff;
    text-align:center;
    border: none;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    outline:none
`;



function createSettingslines(numOfLines) {
    let table = []

    for (let i = 0; i < numOfLines; i++) {
        table.push(
            <ModuleLineWrapper key={i}>
                <ModuleLineBeginningWrapper>
                    <ModuleLineNumberWrapper>{i}.</ModuleLineNumberWrapper>
                </ModuleLineBeginningWrapper>
                
                <ChangePullUpButtonWrapper>pull-up/pull-down</ChangePullUpButtonWrapper>
                <ChangeVoltageButtonWrapper>3.3V/5V</ChangeVoltageButtonWrapper>
            </ModuleLineWrapper>
        );
    }
    return table;
}

function createSettingsOverlay(settingsActive, hideSettingsHandler, numOfLines) {
    if(settingsActive === 0) {
        // return();
    }
    else if(settingsActive === 1) {
        return (
            <SettingsOverlay>
                <SettingsOverlayContent>
                    <SettingsOverlayHeader>
                        <h2>GPIO Settings</h2>
                        <ModuleHeadingCloseButton 
                            onClick={() => hideSettingsHandler()}
                        >
                            Close
                        </ModuleHeadingCloseButton>
                    </SettingsOverlayHeader>

                    {createSettingslines(numOfLines)}
                </SettingsOverlayContent>
            </SettingsOverlay>
        );
    }
}

function Settings(props) {
    return (
        <div>
            {createSettingsOverlay(props.settingsActive, props.hideSettingsHandler, props.numOfLines)}
        </div>
    );
}

export default Settings;