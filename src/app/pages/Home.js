import React, {useState} from 'react';
import Map from "./Map";
import {BiCamera, BiUpload} from "react-icons/bi";
import {Link} from "react-router-dom";
import ButtonsOverlay from "../components/ButtonsOverlay";

const Home = () => {

    return (
<div className={`grid h-screen justify-center content-center`}>
        <div className={`w-96 bg-red-200 h-[60rem] rounded-lg p-5 content-center grid  `}>
            <div className={`space-y-3 `}>
                <h2>دلوقتي  تدور </h2>
                <button className={`w-full h-16 bg-green-800 rounded-lg text-2xl text-lime-50`}>قطتي ضاعت </button>
                <button className={`w-full h-16 bg-red-700 rounded-lg text-2xl text-lime-50`}>لقيت قطه </button>
            </div>
        </div>
</div>
    );
};
export default Home;
