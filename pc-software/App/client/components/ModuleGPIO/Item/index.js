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

const valEnum = {
    LOW: 0,
    HIGH: 1,
}

const typeEnum = {
    IN: 0,
    OUT: 1,
};

class GPIOModuleItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: typeEnum.IN,
            val: valEnum.LOW,
        };

        this.GPIOdata = {
            deviceName: this.props.deviceName,
            moduleID: this.props.moduleID,
            itemID: this.props.itemID,
            type: this.state.type,
            val: this.state.val
        };

        this.updateItemType = this.updateItemType.bind(this);
        this.updateItemVal = this.updateItemVal.bind(this);

    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.state.val !== prevState.val) {
            this.GPIOdata.val = this.state.val;
        }
        else if(this.state.type !== prevState.type) {
            this.GPIOdata.type = this.state.type;
        }

        this.post();
    }

    getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    post() {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/gpio');
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = function() {
            // nothing to be done
        }

        xhr.send(JSON.stringify(this.GPIOdata));
    }
    
    updateItemType() {
        if(this.state.type === typeEnum.IN) {
            this.setState({type: typeEnum.OUT});        
        }
        else {
            this.setState({type: typeEnum.IN});  
        }
    }

    updateItemVal(evt) {
        this.setState({
            val: evt.target.value
        });
    }

    itemVal(type, val, onChange) {
        if(type === typeEnum.IN) {
            return (
                <p>{val}</p>
            );
        }
        else if(type === typeEnum.OUT) {
            return (
                <ModuleLineInput 
                    type='text' 
                    value={val}
                    onChange={evt => onChange(evt)}
                />
            );
        }
    }

    render() {
        return (
            <ItemWrapper>
                <ItemBeginningWrapper>
                    <ItemIDWrapper>{this.props.itemID}.</ItemIDWrapper>
                    <button 
                        onClick={() => this.updateItemType()}
                    >
                        {this.getKeyByValue(typeEnum, this.state.type)}
                    </button>
                </ItemBeginningWrapper>
                
                {this.itemVal(this.state.type, this.state.val, this.updateItemVal)}
            </ItemWrapper>
        );
    }
}

export default GPIOModuleItem;
