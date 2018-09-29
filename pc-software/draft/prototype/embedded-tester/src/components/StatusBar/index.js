import React from 'react'
import './styles.css'

const StatusBar = (props) => (
    <div className='status-bar'>

        <h1>Connection status: </h1> 
        <p>{props.connectionStatus}</p>

        <h1>Connected devices: </h1>
        <p>{props.connectedDevicesIDs}</p>
    </div>
);

export default StatusBar;
