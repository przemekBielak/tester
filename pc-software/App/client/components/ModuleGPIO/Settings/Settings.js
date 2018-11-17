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
    border: 3px solid green; 
    z-index: 1; 
`;

const SettingsOverlayContent = styled.div `
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
    border: 3px solid purple; 
`;

const SettingsOverlayHeader = styled.div `
    display: flex;
    justify-content: space-between;
    border: 1px solid blue;
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



function createSettingslines(numOfLines) {
    let table = []

    for (let i = 0; i < numOfLines; i++) {
        table.push(
            <ModuleLineWrapper key={i}>
                <ModuleLineBeginningWrapper>
                    <ModuleLineNumberWrapper>{i}.</ModuleLineNumberWrapper>
                </ModuleLineBeginningWrapper>
                
                <button type='button'>pull-up/pull-down</button>
                <button type='button'>3.3V/5V</button>
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
                        <button 
                            onClick={() => hideSettingsHandler()}
                        >
                            Close
                        </button>
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