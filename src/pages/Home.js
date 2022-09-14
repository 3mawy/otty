import React from 'react';
import Map from "../components/Map/Map";
import ButtonsOverlay from "../components/ButtonsOverlay";

const Home = () => {
    return (
        <div>

            <div className={`relative z-30`}>
                <Map/>
            </div>

        </div>
    );
};
export default Home;
