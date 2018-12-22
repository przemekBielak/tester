import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from '../reducers/reducer.js';

const logger = createLogger();

const initialState = {
    pullup: false, 
    voltage: false, 
    settingsVisible: {
        MainDevice_GPIO_1: false,
        ExtentionDevice1_GPIO_1: false,
        ExtentionDevice3_GPIO_1: false,
        ExtentionDevice3_GPIO_2: false,
    }
};

const store = createStore(
    reducer, 
    initialState, 
    applyMiddleware(logger));

export default store;