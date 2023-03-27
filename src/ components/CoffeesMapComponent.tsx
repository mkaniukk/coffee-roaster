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
} as { lat: number; lng: number };

type CoffeesMapProps = {
    locations: [string];
};

const CoffeesMapComponent = ({ locations }: CoffeesMapProps) => {
    const [places, setPlaces] = useState([center]);

    useEffect(() => {
        const getPlaceData = async () => {
            let places = await Promise.all(
                locations.map(async (location) => {
                    return fetch(
                        `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${googleMapsApiKey}&query=${location}`,
                    )
                        .then((result) => result.json())
                        .then((place) => place.results[0]?.geometry.location);
                }),
            );
            setPlaces([...places]);
            console.log(places);
        };
        getPlaceData();
    }, [locations]);

    return (
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={places[0]}
                zoom={8}
            >
                {/* Child components, such as markers, info windows, etc. */}
                {places &&
                    places.map((place, index) => {
                        return <Marker key={index} position={place} />;
                    })}
                <></>
            </GoogleMap>
        </LoadScript>
    );
};

export default React.memo(CoffeesMapComponent);
