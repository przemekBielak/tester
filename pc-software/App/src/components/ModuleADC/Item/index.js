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

class ModuleADCItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            val: 1.123,
        }
    }


    render() {
        return(
            <ModuleLineWrapper>
                <ModuleLineNumberWrapper>{this.props.itemID}.</ModuleLineNumberWrapper>
                <p>{this.state.val}</p>
            </ModuleLineWrapper>
        );
    }
}

export default ModuleADCItem;