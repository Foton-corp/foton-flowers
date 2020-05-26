import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

const API_KEY = 'AIzaSyCXDtOI0cTAH4-SPAT3Zx7PierDxYnxIy4';

const GoogleMapUI = ({ google }) => (
  <Map google={google} zoom={14}>
    <Marker name="Current location" />
  </Map>
);

export default GoogleApiWrapper({
  apiKey: API_KEY,
})(GoogleMapUI);
