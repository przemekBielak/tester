import React from 'react';
import ModuleADC from '../ModuleADC';
import ModuleGPIO from '../ModuleGPIO';
import styled from 'styled-components';

const DeviceWrapper = styled.div `
    width: 300px;
    padding: 5px;
    border: 1px solid red;
`;

const Device = (props) => (
    <DeviceWrapper>
        <h2>{props.deviceName}</h2>
        
        <ModuleGPIO
            numOfLines={15} 
        />
        <ModuleADC
            numOfLines={10}
        />
    </DeviceWrapper>
);

export default Device;
