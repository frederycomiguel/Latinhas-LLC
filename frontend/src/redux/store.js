import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
