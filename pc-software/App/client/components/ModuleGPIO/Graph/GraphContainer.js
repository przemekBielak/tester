import React, { Component } from 'react';
import Graph from './Graph.js';

import store from '../../../store/store.js';
import { hideGraph } from '../../../actions/actions.js';

class GraphContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }

    }


    render() {
        return (
            <Graph
                graphVisible={store.getState().graphVisible[this.props.moduleID]}
                hideGraphHandler={() => store.dispatch(hideGraph(this.props.moduleID))}
                moduleID={this.props.moduleID}
            />
        )
    }

}

export default GraphContainer;