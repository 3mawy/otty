import React, {useCallback, useRef, useState} from 'react';
import {BiCamera} from "react-icons/bi";
import Webcam from "react-webcam";

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
            <div className={`absolute z-50 w-screen  ${cameraToggle?(''):('hidden')}`}>
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                />
                <button onClick={capture}>Capture photo</button>
                {imgSrc && (
                    <img
                        src={imgSrc}
                    />
                )}
            </div>
            <div className={`justify-center flex`}>
                <button  onClick={onClickCameraHandler}  className={`fixed z-50 bottom-5 mx-auto bg-orange-400 p-2 rounded-full`}>
                    <BiCamera className={`w-9 h-9 `}/>
                </button>
            </div>
        </div>
    );
};

export default ReactCamera;