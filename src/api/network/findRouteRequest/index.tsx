import { API_WAYPOINTS } from '../../constant';

interface FindRouteResponse {
  paths: {
    points: {
      coordinates: [number, number][];
    };
  }[];
}

export const findRouteRequest = async (coordinates: number[][]) => {
  const data = {
    points: coordinates.map(([lat, lng]) => [lng, lat]),
    snap_preventions: ['motorway', 'ferry', 'tunnel'],
    details: ['road_class', 'surface'],
    profile: 'car',
    locale: 'ru',
    instructions: true,
    calc_points: true,
    points_encoded: false,
  };

  return fetch(API_WAYPOINTS, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((response: FindRouteResponse) => {
      const coordinatesResponse = response.paths[0].points.coordinates.map(([lng, lat]) => [lat, lng]);

      return coordinatesResponse;
    })
    .catch((error: Error) => {
      return error;
    });
};
