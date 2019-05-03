import { call, put, select, takeLatest } from 'redux-saga/effects';
import { SELECT_TCGROUPS_REQUEST } from './constants';
import { tcGroupsSuccess, tcGroupsError } from './actions';

import request from 'utils/request';
import { makeSelectUsername } from './selectors';

function* InitRequest(requestURL) {
  const response = yield call(request, requestURL);
  return response;
}

/**
 * Thinclient and Thinclient groups request/response handler
 */
export function* getGroups() {
  const groupListURL = `http://10.100.182.23:4000/tcservices/distinct/`;
  const tcListURL = `http://10.100.182.23:4000/tcservices/groups/`;
  try {
    // Call our request helper (see 'utils/request')
    // const response = ["group1","group2","group3","group4"];
    let tcListByGroups = {};
    const groupListResponse = yield call(request, groupListURL);
    /*groupListResponse.map((group)=>{
    console.log("Reached");
    const tcListResponse = InitRequest(requestURL+group);
      tcListByGroups[group] = tcListResponse;
    });*/
    for (let i=0;i<groupListResponse.length;i++) {
      const tcListResponse = yield call(request, tcListURL+groupListResponse[i]);
      tcListByGroups[groupListResponse[i]] = tcListResponse;
    }
    yield put(tcGroupsSuccess(tcListByGroups));
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