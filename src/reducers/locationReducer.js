import initialState from './initialState';
import { CHANGE_LOCATION } from '../actions/actionTypes';

export default function changeLocation(state = initialState.location, action) {
  let newState;

  switch(action.type) {
    case CHANGE_LOCATION:
      newState = action.location;

      console.log('CHANGE_LOCATION action');

      return newState;
    default:
      return state;
  }
}
