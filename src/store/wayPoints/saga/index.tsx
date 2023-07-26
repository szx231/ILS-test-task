import { call, delay, put, takeEvery } from 'redux-saga/effects';
import { wayPointsReject, wayPointsSuccess } from '../reducers/index';
import { getWayPointsRequest } from '../../../api/network/getWayPointsRequest';
import { ACTION_TYPE_WAYPOINTS } from '../actions';

export function* workerWayPoints(): Generator {
  try {
    yield delay(1000);
    const response = yield call(getWayPointsRequest);

    if (response instanceof Error) {
      return yield put(wayPointsReject());
    }

    yield put(wayPointsSuccess(response));
  } catch (error) {
    yield put(wayPointsReject());
  }
}

export function* watcherSagaWayPoints() {
  yield takeEvery(ACTION_TYPE_WAYPOINTS, workerWayPoints);
}
