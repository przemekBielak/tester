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
            serverVal: valEnum.LOW,
        };

        this.updateItemType = this.updateItemType.bind(this);
        this.updateItemVal = this.updateItemVal.bind(this);
        this.get = this.get.bind(this);
    }

    componentDidMount(prevProps, prevState) {
        this.post();
        this.get();
    }
    
    componentDidUpdate(prevProps, prevState) {
        this.post();
    }

    post() {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/gpio', true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = function() {
            // nothing to be done
        }

        var GPIOdata = {
            id: this.props.deviceName + '_' + 'GPIO' + '_' + this.props.moduleID + '_' +  this.props.itemID,
            type: this.state.type,
            val: this.state.val
        };

        xhr.send(JSON.stringify(GPIOdata));
    }

    // Send GET request to server for specific id
    // Server responds with input data set by linux app
    // Set item state with received data
    get() {
        var xhr = new XMLHttpRequest();

        var url = '/gpio';
        var params = 'id=' + this.props.deviceName + '_' + 'GPIO' + '_' + this.props.moduleID + '_' +  this.props.itemID;

        xhr.open('GET', url + '?' + params, true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    // received input data
                    this.setState({serverVal: JSON.parse(xhr.responseText).val});
                } else {
                    console.log('err');
                }
            }
        }
        xhr.send(null);
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
                serverVal={this.state.serverVal} 
                val={this.state.val} 
                updateItemType={this.updateItemType}
                updateItemVal={this.updateItemVal}
                get={this.get}
            />
        );
    }
}

export default ItemContainer;
