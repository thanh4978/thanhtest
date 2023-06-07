import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AuthState, Redux, RefreshToken, User } from '@/redux/types';

const initialState: AuthState = {
    enableSignIn: false,
    enableBiometric: false,
    accessToken: '',
    refreshToken: '',
    user: {
        _id: '',
        email: '',
        password: '',
        username: '',
        familyName: '',
        givenName: '',
        name: '',
        photo: '',
        idToken: '',
    },
    isGoogle: false,
};

const reducer = createSlice({
    name: Redux.auth,
    initialState,
    reducers: {
        handleLogin: (state: AuthState, _: PayloadAction<User>) => {
            return {
                ...state,
            };
        },
        handleGoogleSignIn: (
            state: AuthState,
            payload: PayloadAction<User>
        ) => {
            return {
                ...state,
                enableSignIn: true,
                accessToken: '',
                refreshToken: '',
                enableBiometric: false,
                user: payload.payload,
                isGoogle: true,
            };
        },
        handleGoogleSignOut: (state: AuthState) => {
            return {
                ...state,
                enableSignIn: false,
                accessToken: '',
                refreshToken: '',
                enableBiometric: false,
                user: Object.assign(initialState.user),
                isGoogle: false,
            };
        },
        toggleBiometric: (state: AuthState) => {
            return {
                ...state,
                enableBiometric: !state.enableBiometric,
            };
        },
        refreshToken: (
            state: AuthState,
            action: PayloadAction<RefreshToken>
        ) => {
            return {
                ...state,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
            };
        },
        fakeLogin: (
            state: AuthState,
            action: PayloadAction<
                Omit<AuthState, 'enableSignIn' | 'enableBiometric' | ''>
            >
        ) => {
            return {
                ...state,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                user: action.payload.user,
                enableSignIn: true,
            };
        },
        fakeLogout: (state: AuthState) => {
            return {
                ...state,
                enableSignIn: false,
            };
        },
    },
});

export const AuthActions = reducer.actions;
export const AuthReducer = reducer.reducer;
