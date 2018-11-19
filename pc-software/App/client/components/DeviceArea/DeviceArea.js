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
            <Device deviceName='Main Device' key='main'/>
            <Device deviceName='Extention Device 1' key='ext1'/>
            <Device deviceName='Extention Device 2' key='ext2'/>
            <Device deviceName='Extention Device 3' key='ext3'/>
        </DeviceAreaWrapper>
    );
};

export default DeviceArea;
