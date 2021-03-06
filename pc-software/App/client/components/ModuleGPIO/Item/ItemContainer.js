import React, { Component } from 'react';
import Item from './Item.js'

import store from '../../../store/store.js';
import { showSettings, showGraph } from '../../../actions/actions.js';

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
    }

    componentDidMount() {
        this.post();
    }

    post() {
        console.log('sent');
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/gpio', true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = function () {
            // nothing to be done
        }

        var GPIOdata = {
            moduleId: this.props.moduleID,
            itemId: this.props.itemID,
            type: this.state.type,
            val: this.state.val
        };

        xhr.send(JSON.stringify(GPIOdata));
    }

    updateItemType() {
        if (this.state.type === typeEnum.IN) {
            this.setState({ type: typeEnum.OUT }, () => this.post());
        }
        else {
            this.setState({ type: typeEnum.IN }, () => this.post());
        }
    }

    updateItemVal(val) {
        this.setState({
            val: val
        }, () => this.post());
    }

    render() {
        return (
            <Item
                itemID={this.props.itemID}
                type={this.state.type}
                serverVal={this.props.val}
                val={this.state.val}
                updateItemType={this.updateItemType}
                updateItemVal={this.updateItemVal}
                showGraphHandler={() => store.dispatch(showGraph(this.props.moduleID))}
            />
        );
    }
}

export default ItemContainer;
