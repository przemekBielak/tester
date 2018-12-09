import React, { Component } from 'react';
import styled from 'styled-components';

const ModuleLineWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    flex-wrap:nowrap;
    padding: 5px 10px ;
    font-weight: normal;
    font-size: 18px;
`;

const ModuleLineNumberWrapper = styled.p `
    width: 35px;
`;

const ServerValWrapper = styled.p `
    font-weight: bold;
    font-size: 18px;
    color: #bdbdbd;
`;

function Item(props) {
    return (
        <ModuleLineWrapper>
            <ModuleLineNumberWrapper>{props.itemID}.</ModuleLineNumberWrapper>
            <ServerValWrapper>{props.val}</ServerValWrapper>
        </ModuleLineWrapper>
    );
}


export default Item;