import React from 'react';
import ModuleADC from '../ModuleADC';
import ModuleGPIO from '../ModuleGPIO';
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
                <ModuleGPIO numOfLines={15} />
                <ModuleADC numOfLines={10} />
            </div>
        );
    }
    else if (deviceName === 'Extention Device 1') {
        table.push(
            <div key={deviceName}>
                <ModuleGPIO numOfLines={10} />
                <ModuleADC numOfLines={5} />
            </div>
        );
    }
    else if (deviceName === 'Extention Device 2') {
        table.push(
            <div key={deviceName}>
                <ModuleADC numOfLines={10} />
            </div>
        );
    }
    else if (deviceName === 'Extention Device 3') {
        table.push(
            <div key={deviceName}>
                <ModuleGPIO numOfLines={14} />
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
