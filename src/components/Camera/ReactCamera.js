import React, {useCallback, useRef, useState} from 'react';
import {BiCamera, BiCheck, BiExit} from "react-icons/bi";
import Webcam from "react-webcam";
import {CgClose} from "react-icons/cg";
import ReactImagePreview from "./ReactImagePreview";
import {useNavigate} from 'react-router-dom';

const ReactCamera = () => {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);

    const videoConstraints = {
        facingMode: {exact: "environment"}
    };
    const navigate = useNavigate();

    return (

        <div>
            {imgSrc ? (<ReactImagePreview imgSrc={imgSrc} onRetake={() => setImgSrc(null)}/>) : (
                <div className={`absolute z-50 justify-center flex`}>
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        // videoConstraints={videoConstraints}
                        screenshotFormat="image/jpeg"
                        className={`w-screen h-screen object-cover`}
                    />
                    <button onClick={capture}
                            className={` mx-auto fixed z-50 bottom-5 mx-auto bg-red-400 p-2 rounded-full`}>
                        <BiCamera className={`w-9 h-9 `}/>
                    </button>
                    <button onClick={() => navigate(-1)}
                            className={` fixed z-50 top-5 right-5 mx-auto bg-red-400 p-2 rounded-full`}>
                        <CgClose className={`w-9 h-9 `}/>
                    </button>
                </div>
            )}

        </div>
    );
};

export default ReactCamera;