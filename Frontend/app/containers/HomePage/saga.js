import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { GET_ALL_DATA } from './constants';
import { getAllDataSuccess, getAllDataFailure } from './actions';

function* getAllData() {
  const options = {
    method: 'GET',
  };
  try {
    const response = yield call(
      request,
      'http://localhost:7007/application/city/list',
      options,
    );
    yield put(getAllDataSuccess(response));
  } catch (error) {
    yield put(getAllDataFailure(error));
  }
}

// Individual exports for testing
export default function* homePageSaga() {
  yield takeLatest(GET_ALL_DATA, getAllData);
}
