import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TrackType} from "@/types/tracks";

type PlaylistStateType = {
    currentTrack: null | TrackType
    playlist: TrackType[]
    shuffledPlaylist: []
    isShuffle: boolean
    isPlaying: boolean
}

const initialState: PlaylistStateType = {
    currentTrack: null,
    playlist: [],
    shuffledPlaylist: [],
    isShuffle: false,
    isPlaying: false,
};

const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        setCurrentTrack: (state, action: PayloadAction<{ track: TrackType, tracks: TrackType[] }>) => {
            state.currentTrack = action.payload.track;
            state.playlist = action.payload.tracks;
            state.shuffledPlaylist = [...action.payload.tracks].sort(() => 0.5 - Math.random());
        },
        setPrevTrack: (state) => {
            const playlist = state.isShuffle ? state.shuffledPlaylist : state.playlist
            const currentTrackIndex = playlist.findIndex((track)=>
                track._id === state.currentTrack?._id)
            const newTrack = playlist[currentTrackIndex - 1]
            if(newTrack) {
                state.currentTrack = newTrack
            }
        },
        setNextTrack: (state) => {
            const playlist = state.isShuffle ? state.shuffledPlaylist : state.playlist
            const currentTrackIndex = playlist.findIndex((track)=>
                track._id === state.currentTrack?._id)
            const newTrack = playlist[currentTrackIndex + 1]
            if(newTrack) {
                state.currentTrack = newTrack
            }
        },
        setIsShuffle: (state, action: PayloadAction<boolean | null>) => {
            if(action.payload === null)
                state.isShuffle = !state.isShuffle
            else
                state.isShuffle = action.payload
        },
        setIsPlaying: (state, action: PayloadAction<boolean | null>) => {
            if(action.payload === null)
                state.isPlaying = !state.isPlaying
            else
                state.isPlaying = action.payload
        }
    },
});

export const {setCurrentTrack, setPrevTrack, setNextTrack, setIsShuffle, setIsPlaying} = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;