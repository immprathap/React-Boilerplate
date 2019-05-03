/*
 *
 * Explorer reducer
 *
 */

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
  tcGroups: ["asd"],
  tcDevices: [],
});

/* eslint-disable default-case, no-param-reassign */
const explorerReducer = (state = initialState, action) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case SELECT_TCGROUPS_REQUEST:
        return state.set('isLoading', true);
      case SELECT_TCGROUPS_SUCCESS:
        return state.set('tcGroups', fromJS(action.payload))
        .set('isLoading', false);
      case SELECT_TCGROUPS_ERROR:
        return state.set('isLoading', false);
      default:
        return state;
    }
  }

export default explorerReducer;
