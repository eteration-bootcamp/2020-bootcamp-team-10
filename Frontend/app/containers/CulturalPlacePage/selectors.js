import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the culturalPlacePage state domain
 */

const selectCulturalPlacePageDomain = state =>
  state.culturalPlacePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CulturalPlacePage
 */

const makeSelectCulturalPlacePage = () =>
  createSelector(
    selectCulturalPlacePageDomain,
    substate => substate,
  );

export default makeSelectCulturalPlacePage;
export { selectCulturalPlacePageDomain };
