import React, { Component } from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    flex-wrap:nowrap;
    border: 1px solid green;
    margin: 2px 0px;
    height: 35px;
`;

const ItemBeginningWrapper = styled.div `
    display: flex;
    justify-content: flex-start;
`;

const ItemIDWrapper = styled.p `
    width: 35px;
`;

const ModuleLineInput = styled.input `
    width: 35px;
`;

const ValEnum = {
    LOW: 0,
    HIGH: 1,
}

const TypeEnum = {
    IN: 0,
    OUT: 1,
};


class GPIOItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Type: TypeEnum.IN,
            Val: ValEnum.LOW,
        };

        this.handleType = this.handleType.bind(this);
    }

    getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    createItemData() {
        if(this.state.Type === TypeEnum.IN) {
            return (
                <p>{this.getKeyByValue(ValEnum, this.state.Val)}</p>
            );
        }
        else if(this.state.Type === TypeEnum.OUT) {
            return (
                <ModuleLineInput type='text'/>
            );
        }
    }

    handleType() {
        if(this.state.Type === TypeEnum.IN) {
            this.setState({Type: TypeEnum.OUT});        
        }
        else {
            this.setState({Type: TypeEnum.IN});  
        }
    }

    render() {
        return (
            <ItemWrapper>
                <ItemBeginningWrapper>
                    <ItemIDWrapper>{this.props.itemID}.</ItemIDWrapper>
                    <button 
                        type='button' 
                        onClick={() => this.handleType()}
                    >
                        {this.getKeyByValue(TypeEnum, this.state.Type)}
                    </button>
                </ItemBeginningWrapper>
                {this.createItemData()}
            </ItemWrapper>
        );
    }
}

export default GPIOItem;
