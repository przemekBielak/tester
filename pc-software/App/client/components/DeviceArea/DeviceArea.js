import React from 'react';
import Device from '../Device/Device.js';
import styled from 'styled-components';

const DeviceAreaWrapper = styled.div `
    display: flex;
    border: 1px solid black;
`;

function DeviceArea(props) {
    return (
        <DeviceAreaWrapper>
            <Device deviceName='MainDevice' key='main'/>
            <Device deviceName='ExtentionDevice1' key='ext1'/>
            <Device deviceName='ExtentionDevice2' key='ext2'/>
            <Device deviceName='ExtentionDevice3' key='ext3'/>
        </DeviceAreaWrapper>
    );
};

export default DeviceArea;
