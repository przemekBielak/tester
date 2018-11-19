import React, { Component } from 'react';
import styled from 'styled-components';

const ModuleLineWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    flex-wrap:nowrap;
    border: 1px solid green;
    margin: 2px 0px;
`;

const ModuleLineNumberWrapper = styled.p `
    width: 35px;
`;

function Item(props) {
    return (
        <ModuleLineWrapper>
            <ModuleLineNumberWrapper>{props.itemID}.</ModuleLineNumberWrapper>
            <p>{props.val}</p>
        </ModuleLineWrapper>
    );
}


export default Item;