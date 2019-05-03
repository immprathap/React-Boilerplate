/*
 *
 * Explorer reducer
 *
 */
import produce from 'immer';
import { fromJS } from 'immutable';

import { 
  DEFAULT_ACTION,
  SELECT_TCGROUPS_REQUEST,
  SELECT_TCGROUPS_SUCCESS,
  SELECT_TCGROUPS_ERROR
} from './constants';

export const initialState = fromJS({
  isLoading: false,
  isTcDevicesFetched: false,
  tcGroups: [],
  tcDevices: [],
});

/* eslint-disable default-case, no-param-reassign */
const explorerReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case SELECT_TCGROUPS_REQUEST:
        return state.set('isLoading', true);
      case SELECT_TCGROUPS_SUCCESS:
        return state.set('isLoading', false)
        .set('tcGroups', action.payload)
      case SELECT_TCGROUPS_ERROR:
        return state.set('isLoading', false);
    }
  });

export default explorerReducer;
