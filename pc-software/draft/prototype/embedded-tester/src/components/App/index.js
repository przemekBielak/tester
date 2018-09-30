// Generic imports
import React, { Component } from 'react';

// Import all components
import StatusBar from '../StatusBar';
import DeviceArea from '../DeviceArea';

// Styling
import './styles.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      connectionStatus: 'connected',
      moduleIDs: [1, 2, 5, 8],
      moduleTypes: ['GPIO', 'ADC']
    };
  }

  render() {
    return (
      <div className="application">
        <StatusBar 
            connectionStatus = {this.state.connectionStatus}
            connectedDevicesIDs = {this.state.moduleIDs}
        />
        <DeviceArea />
      </div>    
    );
  }
}

export default App;
