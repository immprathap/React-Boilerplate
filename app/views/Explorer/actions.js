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

export function tcGroupsRequest(payload) {
  return {
    type: SELECT_TCGROUPS_REQUEST,
    payload,
  };
}

export function tcGroupsSuccess(payload) {
  return {
    type: SELECT_TCGROUPS_SUCCESS,
    payload,
  };
}

export function tcGroupsError(payload) {
  return {
    type: SELECT_TCGROUPS_ERROR,
    payload,
  };
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
