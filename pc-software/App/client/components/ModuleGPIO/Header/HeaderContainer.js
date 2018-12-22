import React, {Component} from 'react';
import Header from './Header.js';

import store from '../../../store/store.js';
import { showSettings } from '../../../actions/actions.js';

class HeaderContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <Header 
                showSettingsHandler={() => store.dispatch(showSettings())} 
            />
        );
    }
}

export default HeaderContainer;