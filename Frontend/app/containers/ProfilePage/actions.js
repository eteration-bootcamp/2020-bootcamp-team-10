/*
 *
 * ProfilePage actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_USER_INFO,
  SET_USER_INFO_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setUserInfo() {
  return {
    type: SET_USER_INFO,
  };
}

export function setUserInfoSuccess(data) {
  return {
    type: SET_USER_INFO_SUCCESS,
    data,
  };
}