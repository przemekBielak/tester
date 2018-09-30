import React from 'react'
import './styles.css'

function ModuleLine(props){
    if(props.moduleLineType === 'GPIO') {
        return (
            <div className='module-line'>
                <div className='module-line-beginning'>
                    <p className='module-line-number'>{props.moduleLineNumber}.</p>
                    <button className='module-GPIO-button' type='button'>IN/OUT</button>
                </div>
                <p className='module-GPIO-value'>LOW</p>
            </div>
        );
    }
    else if (props.moduleLineType === 'ADC') {
        return (
            <div class='module-line'>
                <div class='module-line-beginning'>
                    <p class='module-line-number'>{props.moduleLineNumber}.</p>
                    <p class='module-ADC-value'>3.1415</p>
                </div>
            </div>
        );
    }
}

export default ModuleLine;
