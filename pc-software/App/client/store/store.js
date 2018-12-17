import {createStore} from 'redux';
import reducer from '../reducers/reducer.js';

const initialState = {pullup: 'pull-up'};
const store = createStore(reducer, initialState);

export default store;