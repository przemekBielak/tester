import React from 'react';
import Device from '../Device';
import styled from 'styled-components';

const DeviceAreaWrapper = styled.div `
    display: flex;
    border: 1px solid black;
`;

const DeviceArea = (props) => (
    <DeviceAreaWrapper>
        <Device deviceName='Main Device'/>
        <Device deviceName='Extention Device 1'/>
        <Device deviceName='Extention Device 2'/>
        <Device deviceName='Extention Device 3'/>
    </DeviceAreaWrapper>
);

export default DeviceArea;
