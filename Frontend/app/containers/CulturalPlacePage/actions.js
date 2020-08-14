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

export function getDataWithId(id) {
  return {
    type: GET_DATA_WITH_ID,
    id,
  };
}
export function getDataWithIdSuccess(placeInfo) {
  console.log('getDataWithIdSuccess in actions', placeInfo);
  return {
    type: GET_DATA_WITH_ID_SUCCESS,
    placeInfo,
  };
}
export function getDataWithIdFailure(error) {
  return {
    type: GET_DATA_WITH_ID_FAILURE,
    error,
  };
}
