import React, {Component} from 'react';
import Header from './Header.js';

class HeaderContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Header showSettingsHandler={this.props.showSettingsHandler} />
        );
    }
}

export default HeaderContainer;