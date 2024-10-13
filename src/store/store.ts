import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {playlistReducer} from "./features/playlistSlice";
import {userReducer} from "@/store/features/userSlice";

export const makeStore = () => {
    return configureStore({
        reducer: combineReducers({
            user: userReducer,
            playlist: playlistReducer,
        }),
    });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];

