import React, { Component } from 'react';
import Graph from './Graph.js';

import store from '../../../store/store.js';
import { hideGraph } from '../../../actions/actions.js';

class GraphContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            update: false,
        }

        this.arrayData=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
        this.increment = 0;
    }

    componentDidMount() {
        this.dateTimer = setInterval(() => {
            this.timer = new Date();

            this.setState({update: !this.state.update});

            this.increment++;

            this.arrayData.pop();
            this.arrayData.unshift(this.increment);

            // console.log(this.arrayData);
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.dateTimer);
    }


    render() {
        return (
            <Graph
                graphVisible={store.getState().graphVisible[this.props.moduleID]}
                hideGraphHandler={() => store.dispatch(hideGraph(this.props.moduleID))}
                moduleID={this.props.moduleID}
                xData={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]}
                yData={this.arrayData}
                key={Math.random()} 
                update={this.state.update}
            />
        )
    }

}

export default GraphContainer;