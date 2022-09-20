import React from 'react';
import LeafletMap from "../components/Map/LeafletMap";
import {useGetCatPostsQuery} from "../../features/posts/catPostsApiSlice";
import ButtonsOverlay from "../components/ButtonsOverlay";
import {Link} from "react-router-dom";
import {BiCamera, BiUpload} from "react-icons/bi";

const Map = () => {

    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetCatPostsQuery();

    let content
    if (isLoading) {
        content = <p>loading..</p>
    } else if (isSuccess) {
        content =
            <>
                <LeafletMap posts={data}/>
            </>
    } else if (isError) {
        content = <><p>{error.message}</p><LeafletMap /></>

    }
    return (
        <>
            <ButtonsOverlay/>
            <div className={`absolute z-30 top-0 left-0 right-0 bottom-0`}>
                {content}
            </div>
            <div className={`justify-center flex z-40 fixed space-x-5 bottom-4 w-full `}>
                <div>
                    <Link to={"/camera"}>
                        <button className={` bg-red-400 p-2 rounded-full`}>
                            <BiCamera className={`w-9 h-9 mx-auto`}/>
                        </button>
                        React
                    </Link>

                </div>
                <div>
                    <Link to={'/'}>
                        <button className={`bg-blue-400 p-2 rounded-full`}>
                            <BiUpload className={`w-9 h-9 mx-auto`}/>
                        </button>
                        upload
                    </Link>
                </div>
            </div>
        </>

    );
};

export default Map;
