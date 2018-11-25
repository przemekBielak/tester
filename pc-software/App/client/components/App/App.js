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
  }
`

const ApplicationWrapper = styled.div`
  padding: 5px;
  border: 1px solid black;
`


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      connectionStatus: 'connected',
      moduleIDs: [1, 2, 5, 8],
      moduleTypes: ['GPIO', 'ADC']
    };
  }

  callBashScript() {
    fetch("/bash")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log('Failed');
        }
      )
  }

  render() {
    return (
      <ApplicationWrapper>
        <StatusBar
          connectionStatus={this.state.connectionStatus}
          connectedDevicesIDs={this.state.moduleIDs}
        />
        <DeviceArea />
        <button
          onClick={() => this.callBashScript()}
        >
          run bash script
        </button>
      </ApplicationWrapper>

    );
  }
}

export default App;
