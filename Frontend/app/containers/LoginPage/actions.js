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
  SET_USERNAME,
  SET_USERNAME_SUCCESS,
  GET_USER_DATA,
  GET_USER_DATA_SUCCESS,
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
export function getAuthenticationData() {
  return {
    type: GET_AUTHENTICATION_DATA,
  };
}

export function setUserName() {
  return {
    type: SET_USERNAME,
  };
}

export function setUserNameSuccess(data) {
  return {
    type: SET_USERNAME_SUCCESS,
    data,
  };
}

export function getUserData() {
  return {
    type: GET_USER_DATA,
  };
}

export function getUserDataSuccess(data) {
  return {
    type: GET_USER_DATA_SUCCESS,
    data,
  };
}