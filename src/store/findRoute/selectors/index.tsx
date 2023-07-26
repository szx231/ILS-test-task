import { RootState } from '../..';

export const selectFindRoute = (state: RootState) => state.findRoute;
export const selectRouteCoordinates = (state: RootState) => {
  const { currentRoute } = state.findRoute;
  const { wayPoints } = state.wayPoints;

  return wayPoints.filter((point) => point.route === currentRoute).map((point) => point.geocode);
};
