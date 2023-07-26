import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';

import L, { Icon } from 'leaflet';

import { useEffect, useMemo, useRef } from 'react';

import marker from '/public/marker.svg';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { wayPointsRequest } from '../../store/wayPoints/reducers';

import { selectWayPoints } from '../../store/wayPoints/selectors';
import { selectFindRoute } from '../../store/findRoute/selectors';

import { Loader } from '../UI/Loader';
import { ErrorMessage } from '../UI/ErrorMessage';

const customIcon = new Icon({
  iconUrl: marker,
  iconSize: [38, 38],
});

export const Map = () => {
  const dispatch = useAppDispatch();
  const { wayPoints, loading, error } = useAppSelector(selectWayPoints);
  const { routeСoordinates, currentRoute, error: findRouteError } = useAppSelector(selectFindRoute);
  const mapRef = useRef<L.Map | null>(null);

  const currentWaypoints = useMemo(
    () => wayPoints.filter((waypoint) => waypoint.route === currentRoute),
    [currentRoute],
  );

  useEffect(() => {
    if (routeСoordinates.length > 0 && mapRef.current != null) {
      const bounds = L.latLngBounds(routeСoordinates);
      mapRef.current.fitBounds(bounds);
    }
  }, [dispatch, routeСoordinates]);

  useEffect(() => {
    dispatch(wayPointsRequest());
  }, []);

  if (error) return <ErrorMessage />;
  if (loading) return <Loader />;
  if (findRouteError) return <ErrorMessage />;

  return (
    <MapContainer center={[59.82761295, 30.41705607]} zoom={11} ref={mapRef}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {currentWaypoints.map(({ geocode, popUp }) => (
        <Marker position={geocode} icon={customIcon} key={popUp}>
          <Popup>{popUp}</Popup>
        </Marker>
      ))}
      <Polyline positions={routeСoordinates} />
    </MapContainer>
  );
};
