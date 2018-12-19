import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';

import store from './store/store.js';

function render() {
    ReactDOM.render(<App />, document.getElementById('root'));
}

store.subscribe(render);
render();

