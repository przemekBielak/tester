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

        // TODO: add default gpio states to all devices

        this.state = {
            "gpioInput": {
                "MainDevice": {
                    "0": {
                        "0": {
                            "type": 0,
                            "val": 0
                        },
                        "1": {
                            "type": 0,
                            "val": 0
                        },
                        "2": {
                            "type": 0,
                            "val": 0
                        },
                        "3": {
                            "type": 0,
                            "val": 0
                        },
                        "4": {
                            "type": 0,
                            "val": 0
                        },
                        "5": {
                            "type": 0,
                            "val": 0
                        },
                        "6": {
                            "type": 0,
                            "val": 0
                        },
                        "7": {
                            "type": 0,
                            "val": 0
                        },
                        "8": {
                            "type": 0,
                            "val": 0
                        },
                        "9": {
                            "type": 0,
                            "val": 0
                        },
                        "10": {
                            "type": 0,
                            "val": 0
                        },
                        "11": {
                            "type": 0,
                            "val": 0
                        },
                        "12": {
                            "type": 0,
                            "val": 0
                        },
                        "13": {
                            "type": 0,
                            "val": 0
                        },
                        "14": {
                            "type": 0,
                            "val": 0
                        }
                    }
                }
            }
        }

        this.eventSource = new EventSource("/gpio/stream");
    }

    componentDidMount() {
        this.eventSource.onmessage = e => this.setState({ gpioInput: JSON.parse(e.data) })
    }

    componentWillUnmount() {
        this.eventSource.close()
    }

    render() {
        return (
            <DeviceAreaWrapper>
                <MainDevice deviceName={this.props.connectedDevices[0]} gpioInputDevice={this.state.gpioInput["MainDevice"]} />
                <ExtentionDevice1 deviceName={this.props.connectedDevices[1]} gpioInputDevice={this.state.gpioInput["MainDevice"]} />
                <ExtentionDevice2 deviceName={this.props.connectedDevices[2]} gpioInputDevice={this.state.gpioInput["MainDevice"]} />
                <ExtentionDevice3 deviceName={this.props.connectedDevices[3]} gpioInputDevice={this.state.gpioInput["MainDevice"]} />
            </DeviceAreaWrapper>
        );
    }
};

export default DeviceArea;
