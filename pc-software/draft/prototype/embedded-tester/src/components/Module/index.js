import React from 'react'
import ModuleHeading from '../ModuleHeading';
import ModuleLine from '../ModuleLine';
import './styles.css'

function createModuleLineList(numOfLines, lineType) {
    let table = []

    for (let i = 0; i < numOfLines; i++) {
      table.push(<ModuleLine 
        moduleLineType={lineType}
        moduleLineNumber={i}/>);
    }
    return table
}

const Module = (props) => (
    <div className='module'>
        <ModuleHeading moduleName={props.moduleName}/>

        {createModuleLineList(props.numOfLines, props.moduleName)}
    </div>
);

export default Module;
