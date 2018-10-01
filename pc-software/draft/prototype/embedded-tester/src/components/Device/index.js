import React from 'react';
import DeviceHeading from '../DeviceHeading';
import Module from '../Module';
import styled from 'styled-components';

const DeviceWrapper = styled.div `
    width: 300px;
    padding: 5px;
    border: 1px solid red;
`;

const Device = (props) => (
    <DeviceWrapper>
        <DeviceHeading deviceName={props.deviceName}/>
        <Module 
            moduleName='GPIO'
            numOfLines={10} 
        />
        <Module 
            moduleName='ADC'
            numOfLines={5}
        />
    </DeviceWrapper>
);

export default Device;
