import React, {useState} from 'react';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import {useMap, useMapEvents} from 'react-leaflet/hooks'
import {Marker} from "react-leaflet/Marker";
import {Popup} from "react-leaflet";
import LeafletMap from "./LeafletMap";
import GoogleMap from "./GoogleMap";

const Map = () => {



    return (
        <div>
            <LeafletMap/>
        </div>

    );
};

export default Map;