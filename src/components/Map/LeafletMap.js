import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {ImCodepen} from "react-icons/im";
import L from 'leaflet';
import cat from "./img/position-gps-svgrepo-com.svg";
import catred from "./img/position-gps-svgrepo-com-red.svg";

const catIcon = new L.Icon({
    iconUrl: cat,
    iconRetinaUrl: cat,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(75, 75),
});
const locationIcon = new L.Icon({
    iconUrl: catred,
    iconRetinaUrl: catred,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(75, 75),
});

export { catIcon, locationIcon };

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
            <Marker position={position} icon={locationIcon}>
                <Popup>You are here</Popup>
            </Marker>
        );
    }
    function CatsLocations() {
        const [catsLocations, setCatsLocations] = useState([{position:[31.0471,  31.8236]},{position:[29.7471,  31.8236]}]);

        return catsLocations.map((location) =>
            (<Marker position={location.position}  icon={catIcon} >
                <Popup>Meow!</Popup>
            </Marker>))
    }

    return (
        <MapContainer
            center={[30.0471,  31.4236]}
            zoom={13}
            scrollWheelZoom
            style={{ height: "100vh" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <LocationMarker />
            <CatsLocations />
            <img src={catIcon}/>
        </MapContainer>
    );
};

export default Map;
