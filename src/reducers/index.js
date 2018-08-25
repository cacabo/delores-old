import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import sidebarReducer from './sidebarReducer'

const rootReducer = combineReducers({
  locationState: locationReducer,
  sidebarState: sidebarReducer,
});

export default rootReducer;
