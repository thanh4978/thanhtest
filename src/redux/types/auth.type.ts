import { IId } from '@/types';

export type User = IId & {
    username?: string;
    email?: string;
    password?: string;
    _id?: string;
    name?: string | null;
    photo?: string | null;
    familyName?: string | null;
    givenName?: string | null;
    idToken?: string | null;
};

export type AuthState = {
    enableSignIn: boolean;
    enableBiometric: boolean;
    accessToken: string;
    refreshToken: string;
    user: User;
    isGoogle: boolean;
};

export type LoginPayload = {
    email: string;
    password: string;
};

export type RefreshToken = {
    refreshToken: string;
    accessToken: string;
};
