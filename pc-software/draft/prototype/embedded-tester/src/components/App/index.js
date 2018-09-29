import React, { Component } from 'react';
import StatusBar from '../StatusBar';
import './styles.css';

class App extends Component {

  state = {
      modules: [1, 2, 5, 8]
  }

    
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Embedded Tester</h1>
        <StatusBar 
            connectionStatus = 'connected'
            connectedDevicesIDs = {this.state.modules}
        />
      </div>
    );
  }
}

export default App;
