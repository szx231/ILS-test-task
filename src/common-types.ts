export interface RoutePoint {
  geocode: [number, number];
  popUp: string;
  route: string;
  point: number;
}

export interface IWayPoints {
  // Defined interface for state
  wayPoints: RoutePoint[];
  loading: boolean;
  error: boolean;
}
