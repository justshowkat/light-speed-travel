import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '650px',
    height: '650px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

const GoogleMapComponent = () => {
    return (
        <LoadScript
          googleMapsApiKey='AIzaSyB92a8Hx3X5FEBunAPmb14ZkM3FPG2d5UE'
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>
        </LoadScript>
      );
};

export default GoogleMapComponent;