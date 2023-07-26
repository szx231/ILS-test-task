import { call, put, select, takeLatest } from 'redux-saga/effects';
import { findRouteSuccess, findRouteReject } from '../reducers';
import { findRouteRequest } from '../../../api/network/findRouteRequest';
import { ACTION_TYPE_FINDROUTE } from '../actions';
import { selectRouteCoordinates } from '../selectors';

export function* workerFindRoute(): Generator<any, void, any> {
  try {
    const coordinates = yield select(selectRouteCoordinates);
    const response = yield call(findRouteRequest, coordinates);

    if (response instanceof Error) {
      return yield put(findRouteReject());
    }
    yield put(findRouteSuccess(response));
  } catch (error) {
    yield put(findRouteReject());
  }
}

export function* watcherSagaFindRoute() {
  yield takeLatest(ACTION_TYPE_FINDROUTE, workerFindRoute);
}
