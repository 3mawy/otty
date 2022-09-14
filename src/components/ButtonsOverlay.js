import React from 'react';
import {BiCamera, BiMicrophone} from "react-icons/bi";
import {GiCat, GiMicrophone, GiWolfHowl} from "react-icons/gi";

import {AiOutlineNotification} from "react-icons/ai";

const ButtonsOverlay = () => {
    function onClickCameraHandler() {

    }

    return (
        <div>
            <div className={`absolute z-50 top-5 right-5`}>
                <button className={` bg-orange-400 block mb-2 p-2 rounded-full`}>
                    <GiCat className={`w-9 h-9 `}/>
                </button>
                <button className={` bg-orange-400 block mb-2 p-2 rounded-full`}>
                    <AiOutlineNotification className={`w-9 h-9 `}/>
                </button>
            </div>
            <button onClick={onClickCameraHandler} className={`absolute z-50 bottom-0 mx-auto bg-orange-400 p-2 rounded-full`}>
                <BiCamera className={`w-9 h-9 `}/>
            </button>
        </div>
    );
};

export default ButtonsOverlay;
