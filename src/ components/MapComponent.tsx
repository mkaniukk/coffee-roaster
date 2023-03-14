import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY as string;

const containerStyle = {
    width: '400px',
    height: '400px',
};

const center = {
    lat: -3.745,
    lng: -38.523,
};

function MapComponent() {
    return (
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                {/* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    );
}

export default React.memo(MapComponent);
