import React from 'react'
import Device from '../Device';
import './styles.css'

const DeviceArea = (props) => (
    <div className='device-area'>
        <Device deviceName='Main Device'/>
        <Device deviceName='Extention Device 1'/>
    </div>
);

export default DeviceArea;
