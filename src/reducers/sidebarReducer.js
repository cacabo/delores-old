import initialState from './initialState';
import { TOGGLE_SIDEBAR } from '../actions/actionTypes';

const sidebarReducer = (state = initialState.sidebar, action) => {
  let newState;

  switch(action.type) {
    case TOGGLE_SIDEBAR:
      newState = {
        active: !state.active,
      };

      return newState;

    default:
      return state;
  }
};

export default sidebarReducer;
