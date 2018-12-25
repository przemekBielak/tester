import React, { Component } from 'react';
import Graph from './Graph.js';

import store from '../../../store/store.js';
import { hideGraph } from '../../../actions/actions.js';

class GraphContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }

        this.timer;
    }

    componentDidMount() {
        this.dateTimer = setInterval(() => {
            this.timer = new Date();
            console.log(this.timer.getTime());
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.dateTimer);
    }


    render() {

        // let rand = Math.floor((Math.random() * 10) + 1); 

        return (
            <Graph
                graphVisible={store.getState().graphVisible[this.props.moduleID]}
                hideGraphHandler={() => store.dispatch(hideGraph(this.props.moduleID))}
                moduleID={this.props.moduleID}
                xData={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]}
                yData={[1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1]}
            />
        )
    }

}

export default GraphContainer;