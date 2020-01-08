import {createStore, Store} from 'redux'
import appReducer from './reducers/appReducer';

export const store: Store = createStore(appReducer);
