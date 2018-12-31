import React from 'react';
import { MainDevice, ExtentionDevice1, ExtentionDevice2, ExtentionDevice3} from '../Device/Device.js';
import styled from 'styled-components';

const DeviceAreaWrapper = styled.div `
    display: flex;
    justify-content: center; // center horizontaly
`;

function createDeviceList(connectedDevices) {

    if(connectedDevices.length == 0) {
        return <h1>No device connected</h1>
    }
    else {
        return (
            <div>
                <MainDevice deviceName={val}/>
                <ExtentionDevice1 deviceName={val}/>
                <ExtentionDevice2 deviceName={val}/>
                <ExtentionDevice3 deviceName={val}/>
            </div>
        )
    }
}

function DeviceArea(props) {
    return (
        <DeviceAreaWrapper>
            <MainDevice deviceName={props.connectedDevices[0]}/>
            <ExtentionDevice1 deviceName={props.connectedDevices[1]}/>
            <ExtentionDevice2 deviceName={props.connectedDevices[2]}/>
            <ExtentionDevice3 deviceName={props.connectedDevices[3]}/>        
        </DeviceAreaWrapper>
    );
};

export default DeviceArea;
