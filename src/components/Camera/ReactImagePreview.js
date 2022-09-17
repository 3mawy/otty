import React from 'react';
import {BiCheck, BiReset} from "react-icons/bi";

const ReactImagePreview = ({imgSrc, cameraToggle, onRetake}) => {
    function confirmImage() {

    }

    return (
        <div className={` z-50 `}>
            <div className={` p-5 mx-auto mt-5 h-[18rem] w-[20rem] relative bg-red-100 rounded-xl`}>
                <img className={`bg-red-600  object-cover bg-cover w-full rounded-xl`}
                     src={imgSrc}
                />
                <input className={`rounded p-2 my-2`} placeholder={`Extra Info`}/>
                    <div className={`flex space-x-4 justify-center `}>
                        <button onClick={confirmImage} className={`  bg-blue-400 p-2 rounded-full`}>
                            <BiCheck className={`w-9 h-9 `}/>
                        </button>
                        <button onClick={onRetake} className={` bg-red-400 p-2 rounded-full`}>
                            <BiReset className={`w-9 h-9 `}/>
                        </button>
                </div>

            </div>



        </div>
    );
};

export default ReactImagePreview;