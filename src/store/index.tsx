import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import WayPointsSlice from './wayPoints/reducers/index';
import FindRouteSlice from './findRoute/reducers/index';
import { rootSaga } from './rootSaga';

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    wayPoints: WayPointsSlice,
    findRoute: FindRouteSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: false,
    }).concat(saga),
});

saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
