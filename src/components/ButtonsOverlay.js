import React from 'react';
import {BiCamera, BiMicrophone} from "react-icons/bi";
import {GiCat, GiMicrophone, GiWolfHowl} from "react-icons/gi";

import {AiOutlineNotification} from "react-icons/ai";
import ReactCamera from "./Camera/ReactCamera";
import Html5Camera from "./Camera/html5Cam/Html5Camera";

const ButtonsOverlay = () => {


    return (
        <div>
            <div className={`absolute z-50 top-5 right-5 `}>
                <button className={` bg-orange-400 block mb-2 p-2 rounded-full`}>
                    <GiCat className={`w-9 h-9 `}/>
                </button>
                <button className={` bg-orange-400 block mb-2 p-2 rounded-full`}>
                    <AiOutlineNotification className={`w-9 h-9 `}/>
                </button>
            </div>
        </div>
    );
};

export default ButtonsOverlay;
