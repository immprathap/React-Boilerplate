import { createSelector } from 'reselect';
import { initialState } from './reducer';
/**
 * Direct selector to the explorer state domain
 */

const selectExplorerDomain = state => state.get("explorer") || initialState;

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
    substate => {
      return substate.get('tcGroups')
    },
  );

  const makeSelectIsLoading = () =>
  createSelector(
    selectExplorerDomain,
    substate => {
      return substate.get('isLoading')
    },
  );

//export default makeSelectExplorer;
export { 
  makeSelectTcGroups,
  makeSelectIsLoading
};
