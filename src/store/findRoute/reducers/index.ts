import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  routeСoordinates: [],
  loading: false,
  error: false,
  currentRoute: null,
};

const FindRouteSlice = createSlice({
  name: 'findRoute',
  initialState,
  reducers: {
    findRouteRequest: (state, action: PayloadAction<string>) => {
      state.currentRoute = action.payload;
      state.loading = true;
    },
    findRouteSuccess: (state, action: PayloadAction<number[][]>) => {
      state.routeСoordinates = action.payload;
      state.loading = false;
    },
    findRouteReject: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { findRouteRequest, findRouteSuccess, findRouteReject } = FindRouteSlice.actions;

export default FindRouteSlice.reducer;
