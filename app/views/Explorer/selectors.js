import { createSelector } from 'reselect';
import { initialState } from './reducer';
/**
 * Direct selector to the explorer state domain
 */

const selectExplorerDomain = state => state.get("explorer") || initialState;

/**
 * specific selectors
 */

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

  const makeSelectIsTcByGroupFetched = () =>
  createSelector(
    selectExplorerDomain,
    substate => {
      return substate.get('isTcByGroupFetched')
    },
  );

export { 
  makeSelectTcGroups,
  makeSelectIsLoading,
  makeSelectIsTcByGroupFetched
};
