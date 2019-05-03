import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the explorer state domain
 */

const selectExplorerDomain = state => state.explorer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Explorer
 */

const makeSelectExplorer = () =>
  createSelector(
    selectExplorerDomain,
    substate => substate,
  );

const makeSelectTcGroups = () =>
  createSelector(
    selectExplorerDomain,
    substate => substate.get('tcGroups'),
  );

//export default makeSelectExplorer;
export { 
  selectExplorerDomain,
  makeSelectTcGroups
};
