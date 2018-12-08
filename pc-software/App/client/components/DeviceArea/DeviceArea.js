import React from 'react';
import Device from '../Device/Device.js';
import styled from 'styled-components';

const DeviceAreaWrapper = styled.div `
    display: flex;
    border: 1px solid black;
    justify-content: center; // center horizontaly
`;

function createDeviceList(connectedDevices) {

    if(connectedDevices.length == 0) {
        return <h1>No device connected</h1>
    }
    else {
        let devices = connectedDevices.map((val, i, arr) => {
            return <Device deviceName={val} key={i}/>
        });
    
        return devices;
    }
}

function DeviceArea(props) {
    return (
        <DeviceAreaWrapper>
            {createDeviceList(props.connectedDevices)}
        </DeviceAreaWrapper>
    );
};

export default DeviceArea;
