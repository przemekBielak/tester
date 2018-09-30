import React from 'react'
import './styles.css'

const ModuleHeading = (props) => (
    <div className='module-heading'>
        <h2>{props.moduleName}</h2>
        <button type='button'>Settings</button>
    </div>
);

export default ModuleHeading;
