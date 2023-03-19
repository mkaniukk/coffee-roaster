import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY as string;

const containerStyle = {
    width: '100vw',
    height: '100vh',
};

const center = {
    lat: -3.745,
    lng: -38.523,
};

const parameters = { query: 'Museum of Contemporary Art Australia' };

const MapComponent = () => {
    const [place, setPlace] = useState(center);

    useEffect(() => {
        const getPlaceData = async () => {
            const place = await fetch(
                `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${googleMapsApiKey}&query=${parameters.query}`,
            ).then((data) => {
                console.log(data);
                return data.json();
            });
            console.log(place.results[0].geometry.location);
            const newPlace = place.results[0].geometry.location;
            setPlace({ ...newPlace });
        };
        getPlaceData();
    }, []);

    return (
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                {/* Child components, such as markers, info windows, etc. */}
                <Marker position={center}></Marker>
            </GoogleMap>
        </LoadScript>
    );
};

export default React.memo(MapComponent);
