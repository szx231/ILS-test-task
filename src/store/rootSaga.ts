import { all } from 'redux-saga/effects';
import { watcherSagaWayPoints } from './wayPoints/saga';
import { watcherSagaFindRoute } from './findRoute/saga';

export function* rootSaga() {
  yield all([
    watcherSagaWayPoints(),
    watcherSagaFindRoute(),
    // добавьте другие Saga здесь
  ]);
}
