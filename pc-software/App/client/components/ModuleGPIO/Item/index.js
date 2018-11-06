import React, { Component } from 'react';
import styled from 'styled-components';
// const { spawn } = require('child_process');

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

// const ls = spawn('ls', ['-lh', '/use']);

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

        this.handleType = this.handleType.bind(this);

    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.state.val !== prevState.val) {
            this.GPIOdata.val = this.state.val;
        }
        else if(this.state.type !== prevState.type) {
            this.GPIOdata.type = this.state.type;
        }

        this.sendInfo();
    }

    getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    updateInputValue(evt) {
        this.setState({
            val: evt.target.value
        });
    }
    
    createItemData() {
        if(this.state.type === typeEnum.IN) {
            return (
                <p>{this.state.val}</p>
                );
        }
        else if(this.state.type === typeEnum.OUT) {
            return (
                <ModuleLineInput 
                    type='text' 
                    value={this.state.val}
                    onChange={evt => this.updateInputValue(evt)}/>
            );
        }
    }

    handleType() {
        if(this.state.type === typeEnum.IN) {
            this.setState({type: typeEnum.OUT});        
        }
        else {
            this.setState({type: typeEnum.IN});  
        }
    }

    sendInfo() {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/gpio');
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = function() {
            // nothing to be done
        }

        xhr.send(JSON.stringify(this.GPIOdata));
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
                        {this.getKeyByValue(typeEnum, this.state.type)}
                    </button>
                </ItemBeginningWrapper>
                {this.createItemData()}
            </ItemWrapper>
        );
    }
}

export default GPIOModuleItem;
