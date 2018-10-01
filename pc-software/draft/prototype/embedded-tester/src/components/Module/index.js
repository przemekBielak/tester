import React from 'react';
import ModuleHeading from '../ModuleHeading';
import ModuleLineADC from '../ModuleLineADC';
import ModuleLineGPIO from '../ModuleLineGPIO';
import styled from 'styled-components';

const ModuleWrapper = styled.div `
    margin-bottom: 10px;
    margin-top: 10px;
    border: solid 1px black;
`;

// Create ModuleLine components
const createModuleLineList = (numOfLines, lineType) => {
    let table = []

    for (let i = 0; i < numOfLines; i++) {
        if(lineType === 'GPIO') {
            table.push(<ModuleLineGPIO 
                moduleLineType={lineType}
                moduleLineNumber={i}/>);
        }
        else if (lineType === 'ADC') {
            table.push(<ModuleLineADC 
                moduleLineType={lineType}
                moduleLineNumber={i}/>);
        }
    }
    return table;
}

const Module = (props) => (
    <ModuleWrapper>
        <ModuleHeading moduleName={props.moduleName}/>

        {createModuleLineList(props.numOfLines, props.moduleName)}
    </ModuleWrapper>
);

export default Module;
