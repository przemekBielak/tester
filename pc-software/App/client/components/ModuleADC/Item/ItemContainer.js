import React, { Component } from 'react';
import Item from './Item.js';

class ItemContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            val: 3.145,
        }

        this.ADCdata = {
            deviceName: this.props.deviceName,
            moduleID: this.props.moduleID,
            itemID: this.props.itemID,
            val: this.state.val,
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.val !== this.state.val) {
            this.ADCdata.val = this.props.val;
        }
    }

    render() {
        return( 
            <Item 
                val={this.state.val}
                itemID={this.props.itemID}
            />
        );
    }
}

export default ItemContainer;