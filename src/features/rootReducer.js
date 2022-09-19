import {combineReducers} from "@reduxjs/toolkit";
import {apiSlice} from "./api/apiSlice";
import CatPostsSlice from "./posts/catPostsSlice";


const reducers_collection = {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: CatPostsSlice,
}

export default combineReducers(reducers_collection);
