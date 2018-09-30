import React from 'react'
import DeviceHeading from '../DeviceHeading';
import Module from '../Module';
import './styles.css'

const Device = (props) => (
    <div className='device'>
        <DeviceHeading deviceName={props.deviceName}/>
        <Module moduleName='GPIO'/>
        <Module moduleName='ADC'/>
    </div>
);

export default Device;
