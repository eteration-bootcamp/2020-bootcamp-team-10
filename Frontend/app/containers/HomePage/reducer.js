/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  GET_ALL_DATA_SUCCESS,
  SET_FILTERED_SEARCH_DATA_SUCCESS,
} from './constants';

export const initialState = {
  culturalPlaces: [],
  filteredPlaces: [],
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case GET_ALL_DATA_SUCCESS:
        state.culturalPlaces = action.data;
        state.filteredPlaces = action.data;
        break;
      case SET_FILTERED_SEARCH_DATA_SUCCESS:
        state.filteredPlaces = action.filteredData;
        break;
    }
  });

export default homePageReducer;
