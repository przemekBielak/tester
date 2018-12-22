import React from 'react';
import styled from 'styled-components';

const SettingsOverlay = styled.div `
    position: fixed; 
    display: block; 
    margin: auto auto;
    padding: 10px 10px;
    width: 400px; 
    height: auto; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2; 
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
    width: 120px;
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
    width: 50px;
    font-weight: normal;
    color: #000;
    background-color: #fff;
    text-align:center;
    border: none;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    outline:none
`;



function createSettingslines(numOfLines, pullup, voltage, updateItemPullUpHandler, updateItemVoltageHandler) {

    // from voltage and pull settings, create strings for the DOM
    let voltageString;
    let pullupString;

    if(voltage === false) {
        voltageString = '5V';
    } 
    else if(voltage === true) {
        voltageString = '3.3V';
    }

    if(pullup === false) {
        pullupString = 'Pull Down';
    } 
    else if(pullup === true) {
        pullupString = 'Pull Up';
    }

    // create all settings lines
    let table = []

    for (let i = 0; i < numOfLines; i++) {
        table.push(
            <ModuleLineWrapper key={i}>
                <ModuleLineBeginningWrapper>
                    <ModuleLineNumberWrapper>{i}.</ModuleLineNumberWrapper>
                </ModuleLineBeginningWrapper>
                
                <ChangePullUpButtonWrapper
                    onClick={() => updateItemPullUpHandler(i)}
                >
                    {pullupString}
                </ChangePullUpButtonWrapper>

                <ChangeVoltageButtonWrapper
                    onClick={() => updateItemVoltageHandler(i)}
                >
                    {voltageString}
                </ChangeVoltageButtonWrapper>
            </ModuleLineWrapper>
        );
    }
    return table;
}

function createSettingsOverlay(settingsVisible, 
                                hideSettingsHandler, 
                                numOfLines, 
                                pullup, 
                                voltage, 
                                updateItemPullUpHandler, 
                                updateItemVoltageHandler) {
    if(settingsVisible === false) {
        // return();
    }
    else if(settingsVisible === true) {
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

                    {createSettingslines(numOfLines, pullup, voltage, updateItemPullUpHandler, updateItemVoltageHandler)}
                </SettingsOverlayContent>
            </SettingsOverlay>
        );
    }
}

function Settings(props) {
    return (
        <div>
            {createSettingsOverlay(props.settingsVisible, 
                                    props.hideSettingsHandler, 
                                    props.numOfLines, 
                                    props.pullup, 
                                    props.voltage,
                                    props.updateItemPullUpHandler, 
                                    props.updateItemVoltageHandler)}
        </div>
    );
}

export default Settings;