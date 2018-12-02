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

        this.updateItemType = this.updateItemType.bind(this);
        this.updateItemVal = this.updateItemVal.bind(this);

    }
    
    // componentDidUpdate(prevProps, prevState) {
    //     this.post();
    // }

    post() {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/gpio');
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = function() {
            // nothing to be done
        }

        var GPIOdata = {
            id: this.props.deviceName + '_' + 'GPIO' + '_' + this.props.moduleID + '_' +  this.props.itemID,
            type: this.state.type,
            val: this.state.val
        };
        console.log(GPIOdata);

        xhr.send(JSON.stringify(GPIOdata));

    }
    
    updateItemType() {
        if(this.state.type === typeEnum.IN) {
            this.setState({type: typeEnum.OUT});        
        }
        else {
            this.setState({type: typeEnum.IN});  
        }
        this.post();
    }

    updateItemVal(val) {
        this.setState({
            val: val
        });
        this.post();
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
