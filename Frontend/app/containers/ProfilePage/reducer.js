/*
 *
 * ProfilePage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, SET_USER_INFO_SUCCESS } from './constants';

export const initialState = {
  userData: [],
};

/* eslint-disable default-case, no-param-reassign */
const profilePageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
    
    case SET_USER_INFO_SUCCESS:
        state.userData = action.data;
        break;
  }
});

export default profilePageReducer;
