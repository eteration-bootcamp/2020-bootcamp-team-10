import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the culturalPlacesListPage state domain
 */

const selectCulturalPlacesListPageDomain = state =>
  state.culturalPlacesListPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CulturalPlacesListPage
 */

const makeSelectCulturalPlacesListPage = () =>
  createSelector(
    selectCulturalPlacesListPageDomain,
    substate => substate,
  );

export default makeSelectCulturalPlacesListPage;
export { selectCulturalPlacesListPageDomain };
