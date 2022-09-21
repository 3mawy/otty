import React, {useEffect, useState} from 'react';
import Map from "./Map";
import {BiCamera, BiUpload} from "react-icons/bi";
import {Link} from "react-router-dom";
import ButtonsOverlay from "../components/ButtonsOverlay";

const Home = () => {

    const [showSidebar, setShowSidebar] = useState(false)
    useEffect(() => {
        setTimeout(() => setShowSidebar(true), 500)

    }, [])
    return (<div className={`grid  justify-center content-center bg-orange-500 h-[100%]`}>
        <div className={`w-96 bg-black bg-opacity-20  rounded-lg p-5 m-5 content-center grid  `}>
            <div className={`space-y-3 `}>
                <h2 className={'text-lime-50 text-4xl py-6'}>تدور دلوقتي؟</h2>
                <div>
                    <Link to={`/map`}>
                        <button className={`w-full h-16 bg-gray-700 rounded-lg text-2xl text-lime-50`}>قطتي ضاعت
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to={`/map`}>
                        <button className={`w-full h-16 bg-gray-800 rounded-lg text-2xl text-lime-50`}>لقيت قطه</button>
                    </Link>
                </div>
            </div>
        </div>
        <div
            className={`fixed right-0 left-0 bottom-4 transform  temporary-bounce animate-bounce transform-gpu ${showSidebar ? "translate-y-0 mt-1  duration-1000" : "translate-y-full -mb-12 "} `}>
            powered by chameleon
        </div>
    </div>);
};
export default Home;
