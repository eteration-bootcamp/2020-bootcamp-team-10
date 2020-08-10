/*
 *
 * LoginPage actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_AUTHENTICATION,
  SET_AUTHENTICATION_SUCCESS,
  GET_AUTHENTICATION_DATA,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function setAuthentication() {
  return {
    type: SET_AUTHENTICATION,
  };
}

export function setAuthenticationSuccess(data) {
  return {
    type: SET_AUTHENTICATION_SUCCESS,
    data,
  };
}
export function GetAuthenticationData() {
  return {
    type: GET_AUTHENTICATION_DATA,
  };
}
