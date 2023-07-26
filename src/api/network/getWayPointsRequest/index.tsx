import { API_GET_MARKERS } from '../../constant';

export const getWayPointsRequest = async () => {
  const res = await fetch(API_GET_MARKERS);
  return res.json();
};
