import React from 'react';
import LeafletMap from "./LeafletMap";

const Map = () => {



    return (
        <div className={`absolute z-30 top-0 left-0 right-0 bottom-0`}>
            <LeafletMap/>
        </div>
    );
};

export default Map;
