import { call, put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import { types } from '../actions';

export function* fetchUserData() {
  try {
    const url = `https://okrcentral.github.io/sample-okrs/db.json`;
    const response = yield call(axios.get, url);
    yield put({
      type: types.FETCH_USER_SUCCESS,
      data: response.data
    });
  } catch (error) {
    console.log('Request failed! Could not fetch dictionary data.');
    yield put({
      type: types.FETCH_USER_FAIL,
      data: error
    });
  }
}

export function* user() {
  yield all([
    takeLatest(types.FETCH_USER_LOAD, fetchUserData)
  ])
}