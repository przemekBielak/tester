import React from 'react';
import ModuleADC from '../ModuleADC';
import ModuleGPIO from '../ModuleGPIO/ModuleGPIO.js';
import styled from 'styled-components';

const DeviceWrapper = styled.div `
    width: 300px;
    padding: 5px;
    border: 1px solid red;
`;

function createDevice(deviceName) {
    let table = [];

    if (deviceName === 'Main Device') {
        table.push(
            <div key={deviceName}>
                <ModuleGPIO numOfLines={15} deviceName={deviceName} moduleID='1'/>
                <ModuleADC numOfLines={10} deviceName={deviceName} moduleID='1'/>
            </div>
        );
    }
    else if (deviceName === 'Extention Device 1') {
        table.push(
            <div key={deviceName}>
                <ModuleGPIO numOfLines={10} deviceName={deviceName} moduleID='1'/>
                <ModuleADC numOfLines={5} deviceName={deviceName} moduleID='1'/>
            </div>
        );
    }
    else if (deviceName === 'Extention Device 2') {
        table.push(
            <div key={deviceName}>
                <ModuleADC numOfLines={10} deviceName={deviceName} moduleID='1'/>
                <ModuleADC numOfLines={10} deviceName={deviceName} moduleID='2'/>
            </div>
        );
    }
    else if (deviceName === 'Extention Device 3') {
        table.push(
            <div key={deviceName}>
                <ModuleGPIO numOfLines={15} deviceName={deviceName} moduleID='1'/>
                <ModuleGPIO numOfLines={5} deviceName={deviceName} moduleID='2'/>
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
            <h2>{props.deviceName}</h2>
            {createDevice(props.deviceName)}
        </DeviceWrapper>
    )
};

export default Device;
