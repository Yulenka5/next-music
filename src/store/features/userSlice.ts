import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchUser, fetchUserSignup} from "@/api/user";
import {fetchToken} from "@/api/token";
import {AuthDataType, UserType} from "@/types/user";
import {Tokens} from "@/types/tokens";

export const getUser = createAsyncThunk(
    "user/getUser",
    async ({ email, password }: AuthDataType) => {
        const getUsers = fetchUser({ email, password });
        return getUsers;
    }
);

export const signup = createAsyncThunk(
    "user/signup",
    async ({ email, password }: AuthDataType) => {
        const userSignUp = fetchUserSignup({ email, password });
        return userSignUp;
    }
);

export const getTokens = createAsyncThunk(
    "token/getToken",
    async ({ email, password }: AuthDataType) => {
        const tokens = fetchToken({ email, password });
        return tokens;
    }
);

type AuthStateType = {
    user: UserType;
    authState: boolean;
    tokens: Tokens;
    error: string;
};

const initialState: AuthStateType = {
    user: {
        id: 0,
        username: "",
        first_name: "",
        last_name: "",
        email: "",
    },
    authState: false,
    tokens: {
        access: "",
        refresh:"",
    },
    error: "",
};

function getEmptyUser():UserType {
    return {
    id: 0,
        username: "",
        first_name: "",
        last_name: "",
        email: "",
}
}

function getEmptyTokens(): Tokens {
    return {
        access: "",
        refresh:"",
    }
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = getEmptyUser();
            state.authState = false;
            state.tokens = getEmptyTokens();
        },
        setTokens: (state, action) => {
            state.tokens = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(getTokens.fulfilled, (state, action) => {
                state.authState = true;
                state.tokens = action.payload;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(getUser.rejected, (state, action) => {
                if (action.error.message) {
                    state.error = action.error.message;
                    console.error("Error:", action.error.message);
                }
            })
            .addCase(signup.rejected, (state, action) => {
                if (action.error.message) {
                    state.error = action.error.message;
                    console.error("Error:", action.error.message);
                }
            });
    },
});

export const { logout } = userSlice.actions;
export const userReducer = userSlice.reducer;