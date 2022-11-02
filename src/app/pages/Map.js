import React from 'react';
import LeafletMap from "../components/Map/LeafletMap";
import {useGetCatPostsQuery} from "../../features/posts/catPostsApiSlice";
import { Outlet } from "react-router-dom";


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
            <div className={`relative z-30 top-0 left-0 right-0 bottom-0`}>
                {content}
            </div>
            <Outlet />
        </>

    );
};

export default Map;
