import React from 'react';
import styled from 'styled-components';

const StatusBarWrapper = styled.div `
    width: 100%;
    display: flex;
    justify-content: flex-between;
    border: 1px solid black;
`

function StatusBar(props) {
    return(
        <StatusBarWrapper>
            <h1>Status: </h1>
            <h1>{props.connectionStatus}</h1>

            <h1>Connected devices: </h1>
            <h1>{props.connectedDevicesIDs}</h1>
        </StatusBarWrapper>
    );
};

export default StatusBar;
