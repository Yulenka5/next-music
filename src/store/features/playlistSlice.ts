import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TrackType} from "@/types/tracks";
import {fetchFavoriteTracks} from "@/api/track";
import {Tokens} from "@/types/tokens";


export const getFavoriteTrack = createAsyncThunk(
    "playlist/getFavoriteTracks",
    async ({access, refresh}: Tokens) => {
        const favoriteTracks = await fetchFavoriteTracks({access, refresh})
        return favoriteTracks
    }
)

type PlaylistStateType = {
    favoritePlaylist: TrackType[]
    currentTrack: null | TrackType
    playlist: TrackType[]
    shuffledPlaylist: []
    isShuffle: boolean
    isPlaying: boolean
}

const initialState: PlaylistStateType = {
    favoritePlaylist: [],
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
            const currentTrackIndex = playlist.findIndex((track) =>
                track._id === state.currentTrack?._id)
            const newTrack = playlist[currentTrackIndex - 1]
            if (newTrack) {
                state.currentTrack = newTrack
            }
        },
        setNextTrack: (state) => {
            const playlist = state.isShuffle ? state.shuffledPlaylist : state.playlist
            const currentTrackIndex = playlist.findIndex((track) =>
                track._id === state.currentTrack?._id)
            const newTrack = playlist[currentTrackIndex + 1]
            if (newTrack) {
                state.currentTrack = newTrack
            }
        },
        setIsShuffle: (state, action: PayloadAction<boolean | null>) => {
            if (action.payload === null)
                state.isShuffle = !state.isShuffle
            else
                state.isShuffle = action.payload
        },
        setIsPlaying: (state, action: PayloadAction<boolean | null>) => {
            if (action.payload === null)
                state.isPlaying = !state.isPlaying
            else
                state.isPlaying = action.payload
        },
        setDislikeTrack: (state, action) => {
            const index = state.favoritePlaylist.findIndex(
                (track) => track._id === action.payload._id
            );
            state.favoritePlaylist.splice(index, 1);
        },
        setLikeTrack: (state, action) => {
            state.favoritePlaylist.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getFavoriteTrack.fulfilled, (state, action) => {
            state.favoritePlaylist = action.payload
        })
            .addCase(getFavoriteTrack.rejected, (state, action) => {
                if (action.error.message) {
                    state.error = action.error.message;
                    console.error("Error:", action.error.message);
                }
            });
    }
});

export const {
    setCurrentTrack,
    setPrevTrack,
    setNextTrack,
    setIsShuffle,
    setIsPlaying,
    setLikeTrack,
    setDislikeTrack
} = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;