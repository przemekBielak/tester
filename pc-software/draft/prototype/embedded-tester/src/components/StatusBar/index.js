import React from 'react'
import './styles.css'

const StatusBar = (props) => (
    <div className='status-bar'>
        <h1 clasclassNames='status-bar-status'>Status: </h1>
        <h1 className='status-bar-status-value'>{props.connectionStatus}</h1>

        <h1>Connected devices: </h1>
        <h1>{props.connectedDevicesIDs}</h1>
    </div>
);

export default StatusBar;
