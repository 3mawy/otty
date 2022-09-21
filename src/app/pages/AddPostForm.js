import React from 'react';
import Map from "./Map";
import ReactImagePreview from "../components/Camera/ReactImagePreview";

const AddPostForm = ({children}) => {
    return (
        <div>
            <Map className={`z-20`}/>
            <div className={`bg-red-600 h-screen w-screen z-50`}>
                {children}
            </div>
        </div>
    );
};

export default AddPostForm;