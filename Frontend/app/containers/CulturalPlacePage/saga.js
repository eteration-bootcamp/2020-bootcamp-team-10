import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { getDataWithIdSuccess, getDataWithIdFailure } from './actions';
import { GET_DATA_WITH_ID } from './constants';

// Individual exports for testing
function* getDataWithId(id) {
  const options = {
    method: 'GET',
  };

  try {
    const response = yield call(
      request,
      `http://localhost:7007/application/city/${id.id.id}`,
      options,
    );
    yield put(getDataWithIdSuccess(response));
  } catch (error) {
    yield put(getDataWithIdFailure(error));
  }
}
export default function* culturalPlacePageSaga() {
  yield takeLatest(GET_DATA_WITH_ID, getDataWithId);
}
