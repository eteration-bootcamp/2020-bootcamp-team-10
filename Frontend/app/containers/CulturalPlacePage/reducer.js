/*
 *
 * CulturalPlacePage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, GET_DATA_WITH_ID_SUCCESS } from './constants';

export const initialState = {
  aCulturalPlace: {},
};

/* eslint-disable default-case, no-param-reassign */
const culturalPlacePageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case GET_DATA_WITH_ID_SUCCESS:
        state.aCulturalPlace = action.data;
        break;
    }
  });

export default culturalPlacePageReducer;
