import React, {useEffect, useState} from "react";
import {MapContainer, TileLayer, Marker, Popup, useMap} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import cat from "./img/position-gps-svgrepo-com.svg";
import catred from "./img/position-gps-svgrepo-com-red.svg";

const lostCatLocationIcon = new L.Icon({
    iconUrl: cat,
    iconRetinaUrl: cat,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(75, 75),
});
const myLocation = new L.Icon({
    iconUrl: catred,
    iconRetinaUrl: catred,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(75, 75),
});

export {myLocation, lostCatLocationIcon};

const LeafletMap = ({posts}) => {
    // visitor geoLocalisation on the Map
    const [position, setPosition] = useState(null);
    const [positionLoaded, setPositionLoaded] = useState(false);

    function LocationMarker() {

        const map = useMap();
        const handleOnLocationFound = (e) => {
            setPositionLoaded(true);
            setPosition(e.latlng);
            map.setView(e.latlng, 15)
        }
        useEffect(() => {
            if (!positionLoaded) {
                map.locate().on("locationfound", handleOnLocationFound);
            }

        }, []);

        return position === null ? null : (
            <Marker position={position} icon={lostCatLocationIcon}>
                <Popup>You are here</Popup>
            </Marker>
        );
    }

    function CatsLocations() {
        const [catsPosts, setCatsPosts] = useState([]);
        useEffect(() => {
            setCatsPosts(posts.posts)
        },[])
        return catsPosts.map((post) =>
            (<Marker position={[post.lat, post.long]} icon={myLocation}>
                <Popup>Meow!</Popup>
            </Marker>))
    }

    return (
        <MapContainer
            center={[30.0471, 31.4236]}
            zoom={14}
            scrollWheelZoom
            style={{height: "100vh"}}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <LocationMarker/>
            <CatsLocations/>
            <img src={myLocation}/>
        </MapContainer>
    );
};

export default LeafletMap;
