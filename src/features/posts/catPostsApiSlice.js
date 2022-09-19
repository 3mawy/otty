import {apiSlice} from "../api/apiSlice";

export const catPostsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCatPosts: builder.query({
            query: () => '/cat-posts',
            providesTags: ['CatPosts']
        }),
        addCatPost: builder.mutation({
            query: data => ({
                url: '/cat-posts',
                method: 'POST',
                body: {
                    image: data.image,
                    notes: data.notes,
                },
            }),
            // Pick out data and prevent nested properties in a hook or selector
            // transformResponse: (response, meta, arg) => response.data,
        })
    })
})
export const {
    useGetCatPostsQuery,
    useAddCatPostMutation
} = catPostsApiSlice;