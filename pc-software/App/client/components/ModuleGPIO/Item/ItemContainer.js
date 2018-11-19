import React, { Component } from 'react';
import Item from './Item.js'

const valEnum = {
    LOW: 0,
    HIGH: 1,
}

const typeEnum = {
    IN: 0,
    OUT: 1,
};

class ItemContainer extends Component {
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

    updateItemVal(val) {
        this.setState({
            val: val
        });
    }

    render() {
        return (
            <Item 
                itemID={this.props.itemID} 
                type={this.state.type} 
                val={this.state.val} 
                updateItemType={this.updateItemType}
                updateItemVal={this.updateItemVal}
            />
        );
    }
}

export default ItemContainer;
