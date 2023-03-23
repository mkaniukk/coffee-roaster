import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY as string;

const containerStyle = {
    width: '100vw',
    height: '100vh',
};

const center = {
    lat: -3.745,
    lng: -38.523,
};

type MapProps = {
    location?: string;
};

const MapComponent = ({ location }: MapProps) => {
    const [place, setPlace] = useState(center);

    useEffect(() => {
        const getPlaceData = async () => {
            const place = await fetch(
                `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${googleMapsApiKey}&query=${location}`,
            ).then((data) => {
                console.log(data);
                return data.json();
            });
            const newPlace = place.results[0]?.geometry.location;
            setPlace((place) => newPlace);
        };
        getPlaceData();
    }, [location]);

    return (
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={place}
                zoom={8}
            >
                {/* Child components, such as markers, info windows, etc. */}
                {place && <Marker position={place} />}
                <></>
            </GoogleMap>
        </LoadScript>
    );
};

export default React.memo(MapComponent);
