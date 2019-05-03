import { call, put, select, takeLatest } from 'redux-saga/effects';
import { SELECT_TCGROUPS_REQUEST } from './constants';
import { tcGroupsSuccess, tcGroupsError } from './actions';

import request from 'utils/request';
import { makeSelectUsername } from './selectors';

/**
 * Github repos request/response handler
 */
export function* getGroups() {
  const requestURL = `http://10.100.182.23:4000/tcservices/distinct/`;

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL);
    yield put(tcGroupsSuccess(response));
  } catch (err) {
    yield put(tcGroupsError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* explorerSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(SELECT_TCGROUPS_REQUEST, getGroups);
}