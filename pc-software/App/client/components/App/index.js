// Generic imports
import React, { Component } from 'react';

// Import all components
import StatusBar from '../StatusBar';
import DeviceArea from '../DeviceArea';

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

const ApplicationWrapper = styled.div `
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

  getData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/data', true);

    xhr.onload = function() {
      if(this.status == 200) {
        var data1 = JSON.parse(this.responseText)[0];
        console.log(data1.color);
        console.log(data1.code);
      }
    }

    xhr.onerror = function() {
      console.log('Request error');
    }

    xhr.send();
  }

  sendData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/post?name=Johnny&id=5', true);

    xhr.onload = function() {
      console.log(this.responseText);
    }

    xhr.send();
  }

  render() {
    return (
      <ApplicationWrapper>
        <StatusBar 
            connectionStatus = {this.state.connectionStatus}
            connectedDevicesIDs = {this.state.moduleIDs}
        />
        <DeviceArea />
        <button
          onClick={() => this.callBashScript()}
        >
          run bash script
        </button>
        <input type='text'></input>
        <button
          onClick={() => this.getData()}  
        >
          Get data
        </button>
        <button
          onClick={() => this.sendData()}  
        >
          Send data
        </button>
      </ApplicationWrapper>    

    );
  }
}

export default App;
