/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  SET_AUTHENTICATION_SUCCESS,
  GET_AUTHENTICATION_DATA,
} from './constants';

export const initialState = {
  isLoggedIn: false,
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case SET_AUTHENTICATION_SUCCESS:
        state.isLoggedIn = action.data;
        console.log('SET_AUTHENTICATION_SUCCESS', state.isLoggedIn);
        break;
      case GET_AUTHENTICATION_DATA:
        state.isLogedIn = state.isLoggedIn;
        break;
    }
  });

export default loginPageReducer;
