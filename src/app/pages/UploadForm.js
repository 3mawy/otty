import React, {useState} from "react";
import Map from "./Map";
import {CgClose} from "react-icons/cg";
import {BiCheck, BiReset} from "react-icons/bi";
import UploadMultiImages from "../components/UploadMultiImages/UploadMultiImages";

const UploadForm = () => {
    // const [selectedImage, setSelectedImage] = useState(null);
    const [extraInfo, setExtraInfo] = useState('')
    const [images, setImages] = React.useState([]);

    function confirmImage() {

    }

    function onRetake() {

    }
    function onSubmitUploadForm() {
    console.log(images)
    }
    return (
        <div className={`relative `}>
            <Map className={`z-20`}/>
            <div className={` h-[100%] absolute right-0 top-0 w-screen z-40`}>
                <div className={`z-50 absolute mx-auto w-full h-full grid bg-black bg-opacity-50`}>
                    <div className={`p-5 mx-auto my-auto w-[22rem]  relative  bg-red-100 rounded-lg`}>
                        <UploadMultiImages onImagesChange={setImages} images={images}/>
                        <textarea id="moreInfo" onChange={(e) => setExtraInfo(e.target.value)} rows={8}
                                  className={`rounded-lg mt-5 mb-4 max-w-80 w-full p-2  mx-auto appearance-none focus-visible:outline-0`}
                                  placeholder={`Extra Info`}/>
                        {images.length > 0 && (<>
                            <div className="flex justify-center text-xl ">
                                <button onClick={onSubmitUploadForm} className={`bg-red-600 p-2 rounded-md `}>
                                    ! تـأكيد
                                </button>
                                {/*<button onClick={onImageRemoveAll} color="danger">*/}
                                {/*    Remove All Images*/}
                                {/*</button>*/}
                            </div>
                        </>)}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default UploadForm;

// <img className={`bg-white h-96 w-80 mx-auto object-cover bg-cover rounded-lg`}
//      src={imgSrc}
//     // onClick={() => setViewImgToggle(!viewImgToggle)}
// />
// <textarea id="moreInfo" onChange={(e) => setExtraInfo(e.target.value)} rows={8}
//           className={`rounded-lg my-5 max-w-80 w-full p-2  mx-auto appearance-none focus-visible:outline-0`}
//           placeholder={`Extra Info`}/>
// <div className={`flex space-x-4 justify-center`}>
//     <button onClick={confirmImage} type="submit" className={`bg-blue-400 p-2 rounded-full`}>
//         <BiCheck className={`w-9 h-9 `}/>
//     </button>
//     {/*<button onClick={onRetake} className={`bg-red-400 p-2 rounded-full`}>*/}
//     {/*    <BiReset className={`w-9 h-9`}/>*/}
//     {/*</button>*/}
// </div>

// <div className={`z-50 absolute mx-auto w-full h-full grid bg-black bg-opacity-50`}>
//     <div className={`p-5 mx-auto my-auto w-[22rem]  relative  bg-red-100 rounded-lg`}>
//         <h1>Upload and Display Image </h1>
//         {selectedImage && (
//             <div>
//                 <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)}/>
//                 <br/>
//                 <button onClick={() => setSelectedImage(null)}>Remove</button>
//             </div>
//         )}
//         <br/>
//
//         <br/>
//         <input
//             type="file"
//             name="myImage"
//             onChange={(event) => {
//                 console.log(event.target.files[0]);
//                 setSelectedImage(event.target.files[0]);
//             }}
//         />
//     </div>
// </div>


