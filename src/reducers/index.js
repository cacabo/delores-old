import { combineReducers } from 'redux';
import location from './locationReducer';

const rootReducer = combineReducers({
  location,
});

export default rootReducer;
