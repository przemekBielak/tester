import React from 'react';
import ModuleADC from '../ModuleADC/ModuleADC.js';
import ModuleGPIO from '../ModuleGPIO/ModuleGPIO.js';
import ModuleCAN from '../ModuleCAN/ModuleCAN.js'
import styled from 'styled-components';

const MainDeviceWrapper = styled.div`
    width: 400px;
    padding: 30px;
`;

const ExtensionDevice1Wrapper = styled.div`
    width: 400px;
    padding: 30px;
`;

const ExtensionDevice2Wrapper = styled.div`
    width: 550px;
    padding: 30px;
`;

const ExtensionDevice3Wrapper = styled.div`
    width: 400px;
    padding: 30px;
`;

const DeviceHeaderWrapper = styled.h2`
    text-align: center;
    font-family: 'IBM Plex Sans Condensed', sans-serif;
    font-weight: bold;
    font-size: 35px;
`;



export function MainDevice(props) {
    return (
        <MainDeviceWrapper>
            <DeviceHeaderWrapper>{"Main Device"}</DeviceHeaderWrapper>
            <ModuleGPIO numOfLines={15} moduleID={props.deviceName + '_GPIO_0'} gpioInputModule={props.gpioInputDevice['0']} />
            <ModuleADC numOfLines={10} moduleID={props.deviceName + '_ADC_0'} />
        </MainDeviceWrapper>
    )
}

export function ExtentionDevice1(props) {
    return (
        <ExtensionDevice1Wrapper>
            <DeviceHeaderWrapper>{"Extension 1"}</DeviceHeaderWrapper>
            <ModuleGPIO numOfLines={10} moduleID={props.deviceName + '_GPIO_0'} gpioInputModule={props.gpioInputDevice['0']} />
            <ModuleADC numOfLines={5} moduleID={props.deviceName + '_ADC_0'} />
        </ExtensionDevice1Wrapper>
    )
}

export function ExtentionDevice2(props) {
    return (
        <ExtensionDevice2Wrapper>
            <DeviceHeaderWrapper>{"Extension 2"}</DeviceHeaderWrapper>
            <ModuleCAN numOfLines={1} moduleID={props.deviceName + '_CAN_0'} />
            <ModuleCAN numOfLines={3} moduleID={props.deviceName + '_CAN_1'} />
        </ExtensionDevice2Wrapper>
    )
}

export function ExtentionDevice3(props) {
    return (
        <ExtensionDevice3Wrapper>
            <DeviceHeaderWrapper>{"Extension 3"}</DeviceHeaderWrapper>
            <ModuleGPIO numOfLines={15} moduleID={props.deviceName + '_GPIO_0'} gpioInputModule={props.gpioInputDevice['0']} />
            <ModuleGPIO numOfLines={5} moduleID={props.deviceName + '_GPIO_1'} gpioInputModule={props.gpioInputDevice['0']} />
        </ExtensionDevice3Wrapper>
    )
}