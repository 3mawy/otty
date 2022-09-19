import {createSlice, current} from "@reduxjs/toolkit"
import {useDispatch} from "react-redux";

const catPostsSlice = createSlice({
// TODO: clean up this code's action thats not needed temporarily
    name: 'catPosts',
    initialState: {
        isVisible: false, isPlaying: false, currentlyPlaying: {},
        tracksQueue: [], originalTracksQueueSort: [], originalTracksQueueIndex: 0, originalTracksQueueId: 0,
        tracksQueueIndex: -1, muted: false, volume: [0], looped: false, shuffled: false,
    },
    reducers: {

    },
})

export const {
    playTrack,
    setCurrentlyPlaying,
    togglePlayer,
    toggleMute,
    toggleShuffle,
    toggleLoop,
    setVolume,
    setTracksQueue,
    setTracksQueueIndex,
    // setOriginalTracksQueueId,
    nextTrack,
    prevTrack,
    handleTrackEnd,
} = catPostsSlice.actions

export default catPostsSlice.reducer

export const selectCurrentlyPlaying = (state) => state.catPosts.currentlyPlaying
export const selectIsPlaying = (state) => state.catPosts.isPlaying
export const selectTracksQueueIndex = (state) => state.catPosts.tracksQueueIndex
export const selectTracksQueue = (state) => state.catPosts.tracksQueue
export const selectShuffledTracksQueue = (state) => state.catPosts.shuffled
export const selectIsVisible = (state) => state.catPosts.isVisible
export const selectVolume = (state) => state.catPosts.volume
export const selectLooped = (state) => state.catPosts.looped
export const selectShuffled = (state) => state.catPosts.shuffled
export const selectProgress = (state) => state.catPosts.progress
export const selectMuted = (state) => state.catPosts.muted
// setCurrentlyPlaying: (state, action) => {
//     state.currentlyPlaying = action.payload;
// },
// state.currentlyPlaying = state.tracksQueue[state.tracksQueueIndex]
// state.currentlyPlaying = state.tracksQueue[state.tracksQueueIndex]
