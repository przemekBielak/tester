// Generic imports
import React, { Component } from 'react';

// Import all components
import StatusBar from '../StatusBar/StatusBar.js';
import DeviceArea from '../DeviceArea/DeviceArea.js';

// Styling
import styled from 'styled-components';
import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components'

injectGlobal`
  ${styledNormalize}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: #FFFFFF;
  }
`

const ApplicationWrapper = styled.div`
  padding: 5px;
`


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            connectedDevices: ['MainDevice', 'ExtentionDevice1', 'ExtentionDevice2', 'ExtentionDevice3'],
            // connectedDevices: ['MainDevice'],
        };
    }

    render() {
        return (
            <ApplicationWrapper>
                {/* <StatusBar
                    connectionStatus={this.state.connectionStatus}
                    connectedDevicesIDs={this.state.moduleIDs}
                /> */}
                <DeviceArea connectedDevices={this.state.connectedDevices} />
            </ApplicationWrapper>

        );
    }
}

export default App;
