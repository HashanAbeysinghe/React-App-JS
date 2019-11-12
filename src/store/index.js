import {
    combineReducers
} from 'redux'
import {
    createStore
} from 'redux'
import * as reducers from './reducers';


const alMasterApp = combineReducers(reducers);

const store = createStore(alMasterApp);

export default store;