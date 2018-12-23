import React from 'react';
import ModuleADC from '../ModuleADC/ModuleADC.js';
import ModuleGPIO from '../ModuleGPIO/ModuleGPIO.js';
import styled from 'styled-components';

const DeviceWrapper = styled.div `
    width: 350px;
    padding: 30px;
`;

const DeviceHeaderWrapper = styled.h2 `
    text-align: center;
    font-family: 'IBM Plex Sans Condensed', sans-serif;
    font-weight: bold;
    font-size: 35px;
`;

function createDevice(deviceName) {
    let table = [];

    if (deviceName === 'MainDevice') {
        table.push(
            <div key={deviceName}>
                <ModuleGPIO numOfLines={15} moduleID={deviceName + '_GPIO_1'}/>
                <ModuleADC numOfLines={10}  moduleID={deviceName + '_ADC_1'}/>
            </div>
        );
    }
    else if (deviceName === 'ExtentionDevice1') {
        table.push(
            <div key={deviceName}>
                <ModuleGPIO numOfLines={10} moduleID={deviceName + '_GPIO_1'}/>
                <ModuleADC numOfLines={5} moduleID={deviceName + '_ADC_1'}/>
            </div>
        );
    }
    else if (deviceName === 'ExtentionDevice2') {
        table.push(
            <div key={deviceName}>
                <ModuleADC numOfLines={10} moduleID={deviceName + '_ADC_1'}/>
                <ModuleADC numOfLines={10} moduleID={deviceName + '_ADC_2'}/>
            </div>
        );
    }
    else if (deviceName === 'ExtentionDevice3') {
        table.push(
            <div key={deviceName}>
                <ModuleGPIO numOfLines={15} moduleID={deviceName + '_GPIO_1'}/>
                <ModuleGPIO numOfLines={5} moduleID={deviceName + '_GPIO_2'}/>
            </div>
        );
    }
    else {
        console.log(`Device name "${deviceName}" is not supported`);
    }

    return table;
};


function Device(props) {
    return (
        <DeviceWrapper>
            <DeviceHeaderWrapper>{props.deviceName}</DeviceHeaderWrapper>
            {createDevice(props.deviceName)}
        </DeviceWrapper>
    )
};

export default Device;
