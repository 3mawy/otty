import React from 'react';
import LeafletMap from "./LeafletMap";
import {useGetCatPostsQuery} from "../../../features/posts/catPostsApiSlice";

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
        content = <p>{error.message}</p>
    }
    return (
        <div className={`absolute z-30 top-0 left-0 right-0 bottom-0`}>
            {content}

        </div>
    );
};

export default Map;
