import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PlaylistType, TrackType} from "@/types/tracks";
import {fetchFavoriteTracks} from "@/api/track";
import {Tokens} from "@/types/tokens";


export const getFavoriteTrack = createAsyncThunk(
    "player/getFavoriteTracks",
    async ({access, refresh}: Tokens) => {
        const favoriteTracks = await fetchFavoriteTracks({access, refresh})
        return favoriteTracks
    }
)

type PlayerStateType = {
    initialPlaylist: PlaylistType
    favoritePlaylist: PlaylistType
    visiblePlaylist: PlaylistType
    currentTrack: null | TrackType
    playlistName: string
    activePlaylist: PlaylistType
    shuffledPlaylist: []
    isShuffle: boolean
    isPlaying: boolean
}

const initialState: PlayerStateType = {
    initialPlaylist: [],
    favoritePlaylist: [],
    visiblePlaylist: [],
    currentTrack: null,
    playlistName: "",
    activePlaylist: [], // то что поет
    shuffledPlaylist: [],
    isShuffle: false,
    isPlaying: false,
};

const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        setInitialPlaylist: (state, action: PayloadAction<PlaylistType>) => {
            state.initialPlaylist = action.payload;
        },
        setVisiblePlaylist: (state, action: PayloadAction<PlaylistType>) => {
            state.visiblePlaylist = action.payload;
        },
        setCurrentTrack: (state, action: PayloadAction<{ track: TrackType, tracks: PlaylistType }>) => {
            state.currentTrack = action.payload.track;
            state.activePlaylist = action.payload.tracks;
            state.shuffledPlaylist = [...action.payload.tracks].sort(() => 0.5 - Math.random());
        },
        setPlaylistName: (state, action: PayloadAction<string>)=> {
           state.playlistName = action.payload
        },
        setPrevTrack: (state) => {
            const playlist = state.isShuffle ? state.shuffledPlaylist : state.activePlaylist
            const currentTrackIndex = playlist.findIndex((track) =>
                track._id === state.currentTrack?._id)
            const newTrack = playlist[currentTrackIndex - 1]
            if (newTrack) {
                state.currentTrack = newTrack
            }
        },
        setNextTrack: (state) => {
            const playlist = state.isShuffle ? state.shuffledPlaylist : state.activePlaylist
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
    setPlaylistName,
    setVisiblePlaylist,
    setInitialPlaylist,
    setCurrentTrack,
    setPrevTrack,
    setNextTrack,
    setIsShuffle,
    setIsPlaying,
    setLikeTrack,
    setDislikeTrack
} = playerSlice.actions;
export const playerReducer = playerSlice.reducer;