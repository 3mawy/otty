import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";


const Map = () => {
    // visitor geoLocalisation on the Map
    function LocationMarker() {
        const [position, setPosition] = useState(null);

        const map = useMap();

        useEffect(() => {
            map.locate().on("locationfound", function (e) {
                setPosition(e.latlng);
                map.flyTo(e.latlng, map.getZoom());
            });
        }, []);

        return position === null ? null : (
            <Marker position={position} >
                <Popup>You are here</Popup>
            </Marker>
        );
    }

    return (
        <MapContainer
            center={[30.0471,  31.4236]}
            zoom={13}
            scrollWheelZoom
            style={{ height: "100vh" }}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <LocationMarker />
        </MapContainer>
    );
};

export default Map;
