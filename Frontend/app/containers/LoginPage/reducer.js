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
  SET_USERNAME_SUCCESS,
  GET_USER_DATA_SUCCESS,
} from './constants';

export const initialState = {
  isLoggedIn: false,
  userName: '',
  userProfile: {},
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case SET_AUTHENTICATION_SUCCESS:
        state.isLoggedIn = action.data;
        break;
      case GET_AUTHENTICATION_DATA:
        state.isLogedIn = state.isLoggedIn;
        break;
      case SET_USERNAME_SUCCESS:
        state.userName = action.data;
        break;
      case GET_USER_DATA_SUCCESS:
        state.userProfile = action.data;
        break;
    }
  });

export default loginPageReducer;
