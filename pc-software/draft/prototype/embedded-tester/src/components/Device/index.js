import React from 'react'
import DeviceHeading from '../DeviceHeading';
import Module from '../Module';
import './styles.css'

const Device = (props) => (
    <div className='device'>
        <DeviceHeading deviceName={props.deviceName}/>
        <Module 
            moduleName='GPIO'
            numOfLines={10} 
        />
        <Module 
            moduleName='ADC'
            numOfLines={5}
        />
    </div>
);

export default Device;
