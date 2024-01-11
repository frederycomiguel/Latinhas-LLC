import { combineReducers } from 'redux';
import demandsReducer from './demandsReducer';
const rootReducer = combineReducers({
    demands: demandsReducer,
});

export default rootReducer;
