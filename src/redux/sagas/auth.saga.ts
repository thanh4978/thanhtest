import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import { AuthActions } from '../reducers';
import { AuthState, LoginPayload } from '../types';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
const user: Omit<AuthState, 'enableSignIn' | 'enableBiometric'> = {
    accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNmNzVmNDA3MGEwMjE4NDJiNjRiMjQiLCJlbWFpbCI6InR2aG9haTI0MTIyM0BnbWFpbC5jb20iLCJyb2xlIjowLCJpYXQiOjE2ODE5MjA0MzMsImV4cCI6MTY4MjAwNjgzM30.g-lZqiOO7-4skgU2G-Lnd_3hLjuc9WUXmrN63ol7gCc',
    refreshToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNmNzVmNDA3MGEwMjE4NDJiNjRiMjQiLCJlbWFpbCI6InR2aG9haTI0MTIyM0BnbWFpbC5jb20iLCJyb2xlIjowLCJpYXQiOjE2ODE5MjA0MzMsImV4cCI6MTY4MjAwNjgzM30.g-lZqiOO7-4skgU2G-Lnd_3hLjuc9WUXmrN63ol7gCc',
    user: {
        _id: '643f75f4070a021842b64b244',
        username: 'tvhoai241223@gmail.com',
        email: 'tvhoai241223@gmail.com',
        password: 'admin',
    },
};

function* handleLogin(action: PayloadAction<LoginPayload>): Generator {
    try {
        // const response: any = yield call(
        //     AuthService.handleLogin,
        //     action.payload
        // );
        yield put(AuthActions.fakeLogin(user));
    } catch (error) {
        console.log(error);
    }
}

function* handleGoogleSignIn(): Generator {
    try {
    } catch (error) {
        console.log(error);
    }
}

export default function* watchAuthSaga() {
    yield takeLatest(AuthActions.handleLogin, handleLogin);
    yield takeLatest(AuthActions.handleGoogleSignIn, handleGoogleSignIn);
}
