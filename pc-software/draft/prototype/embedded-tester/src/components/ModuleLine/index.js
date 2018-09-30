import React from 'react'
import './styles.css'

const ModuleLine = (props) => (
    <div className='module-line'>
        <div className='module-line-beginning'>
            <p className='module-line-number'>1.</p>
            <button className='module-GPIO-button' type='button'>IN/OUT</button>
        </div>
        <p className='module-GPIO-value'>LOW</p>
    </div>
);

export default ModuleLine;
