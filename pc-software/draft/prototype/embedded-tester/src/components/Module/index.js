import React from 'react'
import ModuleHeading from '../ModuleHeading';
import ModuleLine from '../ModuleLine';
import './styles.css'

const Module = (props) => (
    <div className='module'>
        <ModuleHeading moduleName={props.moduleName}/>
        <ModuleLine />
        <ModuleLine />
        <ModuleLine />
        <ModuleLine />
        <ModuleLine />
        <ModuleLine />
        <ModuleLine />
        <ModuleLine />
    </div>
);

export default Module;
