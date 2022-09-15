import React, {useCallback, useRef, useState} from 'react';
import {BiCamera, BiCheck, BiExit} from "react-icons/bi";
import Webcam from "react-webcam";
import {CgClose} from "react-icons/cg";

const ReactCamera = () => {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [cameraToggle, setCameraToggle] = useState(false);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);

    function onClickCameraHandler() {
    setCameraToggle(!cameraToggle)
    }
    return (

        <div >
            <div className={`absolute z-50  ${cameraToggle?(''):('hidden')}`}>
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    className={`w-screen h-screen`}
                />
                <button  onClick={capture}  className={`${cameraToggle?(''):('hidden')} mx-auto fixed z-50 bottom-5 mx-auto bg-red-400 p-2 rounded-full`}>
                    <BiCamera className={`w-9 h-9 `}/>
                </button>
                <button  onClick={onClickCameraHandler} className={`${cameraToggle?(''):('hidden')} fixed z-50 top-5 right-5 mx-auto bg-red-400 p-2 rounded-full`}>
                    <CgClose className={`w-9 h-9 `}/>
                </button>
            </div>
            {imgSrc && (
                <div className={`w-screen h-screen z-50 absolute `}>
                    <div className={`flex justify-center`}>
                        <div className={`absolute flex bottom-5 space-x-4`}>
                            <button  onClick={capture}  className={`${cameraToggle?(''):('hidden')}  bg-blue-400 p-2 rounded-full`}>
                                <BiCheck className={`w-9 h-9 `}/>
                            </button>
                            <button  onClick={capture}  className={`${cameraToggle?(''):('hidden')} bg-green-400 p-2 rounded-full`}>
                                <BiCheck className={`w-9 h-9 `}/>
                            </button>
                        </div>

                    </div>

                    <img className={`bg-red-600`}
                         src={imgSrc}
                    />
                </div>
            )}
            <div className={`justify-center flex`}>

                <button  onClick={onClickCameraHandler}  className={` fixed z-40 bottom-5 mx-auto bg-orange-400 p-2 rounded-full`}>
                    <BiCamera className={`w-9 h-9 `}/>
                </button>
            </div>
        </div>
    );
};

export default ReactCamera;