/*
 *
 * Explorer actions
 *
 */

import { 
  DEFAULT_ACTION,
  SELECT_TCGROUPS_REQUEST,
  SELECT_TCGROUPS_SUCCESS,
  SELECT_TCGROUPS_ERROR
} from './constants';

export function tcGroupsRequest(data) {
  return {
    type: SELECT_TCGROUPS_REQUEST,
    data,
  };
}

export function tcGroupsSuccess(data) {
  return {
    type: SELECT_TCGROUPS_SUCCESS,
    data,
  };
}

export function tcGroupsError(data) {
  return {
    type: SELECT_TCGROUPS_ERROR,
    data,
  };
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
