import { call, put, takeLatest } from 'redux-saga/effects';
import { apiServer } from 'constants/index.js';
import request from 'utils/request';
import { SELECT_TCGROUPS_REQUEST } from './constants';
import { tcGroupsSuccess, tcGroupsError } from './actions';

/**
 * Thinclient and Thinclient groups request/response handler
 */
export function* getGroups() {
  const groupListURL = `${apiServer}tcservices/distinct/`;
  const tcListURL = `${apiServer}tcservices/groups/`;
  try {
    // Call our request helper (see 'utils/request')
    // const response = ["group1","group2","group3","group4"];
    const tcListByGroups = {};
    const groupListResponse = yield call(request, groupListURL);
    /* groupListResponse.map((group)=>{
    console.log("Reached");
    const tcListResponse = InitRequest(requestURL+group);
      tcListByGroups[group] = tcListResponse;
    }); */
    for (let i = 0; i < groupListResponse.length; i += 1) {
      const tcListResponse = yield call(
        request,
        tcListURL + groupListResponse[i],
      );
      tcListByGroups[groupListResponse[i]] = tcListResponse;
    }
    yield put(tcGroupsSuccess(tcListByGroups));
  } catch (err) {
    yield put(tcGroupsError(err));
  }
}

export function* getAllTcs() {
  const tcListURL = `${apiServer}tcservices/`;
  try {
    const tcListByGroups = {};
    const tcListResponse = yield call(request, tcListURL);
    const tcAttributes = Object.keys(tcListResponse[0]);
    tcListByGroups.Default = tcListResponse.map(tc => {
      const tempTc = [];
      for (let i = 0; i < tcAttributes.length; i += 1) {
        tempTc.push(tc[tcAttributes[i]]);
      }
      return tempTc;
    });
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
