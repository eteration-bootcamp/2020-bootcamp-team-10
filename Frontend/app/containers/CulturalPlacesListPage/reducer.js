/*
 *
 * CulturalPlacesListPage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, GET_CULTURAL_PLACE_DATA_SUCCESS } from './constants';

export const initialState = {
  culturalPlace: [],
};
/* eslint-disable default-case, no-param-reassign */
const culturalPlacesListPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case GET_CULTURAL_PLACE_DATA_SUCCESS:
        state.culturalPlace = action.data;
        break;
    }
  });

export default culturalPlacesListPageReducer;
