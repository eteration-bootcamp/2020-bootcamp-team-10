/*
 *
 * CulturalPlacePage actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_DATA_WITH_ID,
  GET_DATA_WITH_ID_SUCCESS,
  GET_DATA_WITH_ID_FAILURE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getDataWithId() {
  return {
    type: GET_DATA_WITH_ID,
  };
}
export function getDataWithIdSuccess(id) {
  console.log('getDataWithIdSuccess', id);
  return {
    type: GET_DATA_WITH_ID_SUCCESS,
    id,
  };
}
export function getDataWithIdFailure(error) {
  return {
    type: GET_DATA_WITH_ID_FAILURE,
    error,
  };
}
