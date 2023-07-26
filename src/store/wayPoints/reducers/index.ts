import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWayPoints } from '../../../common-types';

const initialState: IWayPoints = {
  wayPoints: [],
  loading: false,
  error: false,
};

const WayPointsSlice = createSlice({
  name: 'wayPoints',
  initialState,
  reducers: {
    wayPointsRequest: (state) => {
      state.loading = true;
    },
    wayPointsSuccess: (state, action: PayloadAction<any>) => {
      state.wayPoints = action.payload;
      state.loading = false;
    },
    wayPointsReject: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { wayPointsRequest, wayPointsSuccess, wayPointsReject } = WayPointsSlice.actions;

export default WayPointsSlice.reducer;
