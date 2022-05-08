import { legacy_createStore as createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { MainReducer } from './MainReducer';
import { WareHouseReducer } from './WareHouse/WareHouseReducer';

const enhancers = [];
const isDevelopment = process.env.NODE_ENV === 'development';
if(isDevelopment && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__)
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())

const configureStore = createStore(

    combineReducers({
        Main: MainReducer,
        WareHouse: WareHouseReducer
    }),

    compose(
        applyMiddleware(thunk),
        ...enhancers
    )
);

export default configureStore;