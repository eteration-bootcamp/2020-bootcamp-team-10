/*
 *
 * CulturalPlacesListPage actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_CULTURAL_PLACE_DATA,
  GET_CULTURAL_PLACE_DATA_SUCCESS,
  GET_CULTURAL_PLACE_DATA_FAILURE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function getCulturalPlaceData(id) {
  return {
    type: GET_CULTURAL_PLACE_DATA,
    id,
  };
}
export function getCulturalPlaceDataSuccess(data) {
  return {
    type: GET_CULTURAL_PLACE_DATA_SUCCESS,
    data,
  };
}
export function getCulturalPlaceDataFailure(error) {
  return {
    type: GET_CULTURAL_PLACE_DATA_FAILURE,
    error,
  };
}
