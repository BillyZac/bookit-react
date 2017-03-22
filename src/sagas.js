import { call, put, takeEvery } from 'redux-saga/effects';
import api from './api';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    const user = yield call(api.fetchUser, action.payload.userId);
    console.log(user);
    yield put({ type: 'USER_FETCH_SUCCEEDED', user });
  } catch (e) {
    console.log(e);
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* mySaga() {
  yield takeEvery('USER_FETCH_REQUESTED', fetchUser);
}

export default mySaga;
