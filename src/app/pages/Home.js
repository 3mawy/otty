import React, {useState} from 'react';
import Map from "../components/Map/Map";
import {BiCamera, BiUpload} from "react-icons/bi";
import {Link} from "react-router-dom";
import ButtonsOverlay from "../components/ButtonsOverlay";

const Home = () => {


    return (
        <div className={`relative`}>
            <ButtonsOverlay/>
            <Map/>
            <div className={`justify-center flex z-40 fixed space-x-5 bottom-4 w-full `}>
                <div>
                    <Link to={"/camera"}>
                        <button className={` bg-red-400 p-2 rounded-full`}>
                            <BiCamera className={`w-9 h-9 mx-auto`}/>
                        </button>
                        React
                    </Link>

                </div>
                <div>
                    <Link to={'/'}>
                        <button className={`bg-blue-400 p-2 rounded-full`}>
                            <BiUpload className={`w-9 h-9 mx-auto`}/>
                        </button>
                        upload
                    </Link>
                </div>
            </div>

        </div>
    );
};
export default Home;
