/*
 *
 * HomePage actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_ALL_DATA,
  GET_ALL_DATA_SUCCESS,
  GET_ALL_DATA_FAILURE,
  SET_FILTERED_SEARCH_DATA,
  SET_FILTERED_SEARCH_DATA_SUCCESS,
  SET_FILTERED_SEARCH_DATA_FAILURE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getAllData() {
  return {
    type: GET_ALL_DATA,
  };
}
export function getAllDataSuccess(data) {
  console.log('getAllDataSuccess', data);
  return {
    type: GET_ALL_DATA_SUCCESS,
    data,
  };
}
export function getAllDataFailure(error) {
  return {
    type: GET_ALL_DATA_FAILURE,
    error,
  };
}

export function setFilteredSearchData() {
  console.log('filteredSearch Action');
  return {
    type: SET_FILTERED_SEARCH_DATA,
  };
}

export function setFilteredSearchDataSuccess(filteredData) {
  console.log('setFilteredSearchDataSuccess', filteredData);
  return {
    type: SET_FILTERED_SEARCH_DATA_SUCCESS,
    filteredData,
  };
}
export function setFilteredSearchDataFailure(error) {
  return {
    type: SET_FILTERED_SEARCH_DATA_FAILURE,
    error,
  };
}
