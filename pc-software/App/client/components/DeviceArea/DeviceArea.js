import React, { Component } from 'react';
import { MainDevice, ExtentionDevice1, ExtentionDevice2, ExtentionDevice3 } from '../Device/Device.js';
import styled from 'styled-components';

const DeviceAreaWrapper = styled.div`
    display: flex;
    justify-content: center; // center horizontaly
`;

function createDeviceList(connectedDevices) {

    if (connectedDevices.length == 0) {
        return <h1>No device connected</h1>
    }
    else {
        return (
            <div>
                <MainDevice deviceName={val} />
                <ExtentionDevice1 deviceName={val} />
                <ExtentionDevice2 deviceName={val} />
                <ExtentionDevice3 deviceName={val} />
            </div>
        )
    }
}

class DeviceArea extends Component {
    constructor(props) {
        super(props);

        this.state = {
            GPIOinput: {}
        }

        this.eventSource = new EventSource("/gpio/stream");
    }

    componentDidMount() {
        // this.eventSource.onmessage = e => this.setState({ GPIOinput: JSON.parse(e.data) })
        this.eventSource.onmessage = e => console.log(JSON.parse(e.data))
    }

    render() {
        return (
            <DeviceAreaWrapper>
                <MainDevice deviceName={this.props.connectedDevices[0]} />
                <ExtentionDevice1 deviceName={this.props.connectedDevices[1]} />
                <ExtentionDevice2 deviceName={this.props.connectedDevices[2]} />
                <ExtentionDevice3 deviceName={this.props.connectedDevices[3]} />
            </DeviceAreaWrapper>
        );
    }
};

export default DeviceArea;
