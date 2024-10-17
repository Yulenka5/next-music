import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {playerReducer} from "./features/playerSlice";
import {userReducer} from "@/store/features/userSlice";

export const makeStore = () => {
    return configureStore({
        reducer: combineReducers({
            user: userReducer,
            player: playerReducer,
        }),
    });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];

