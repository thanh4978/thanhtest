import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Redux, User } from '@/redux/types';
import { Pagination } from '@/types';

interface UserState extends Pagination {
    data: any[];
    errorMessage: string;
}

const initialState: UserState = {
    data: [],
    page: 0,
    pageSize: 0,
    totalPage: 0,
    totalRecord: 0,
    errorMessage: '',
};

const reducer = createSlice({
    name: Redux.user,
    initialState,
    reducers: {
        getUsers: (
            state: UserState,
            _: PayloadAction<Pick<Pagination, 'pageSize' | 'page'>>
        ) => {
            return {
                ...state,
            };
        },
        getUsersSuccess: (
            state: UserState,
            action: PayloadAction<Omit<UserState, 'errorMessage'>>
        ) => {
            return {
                ...state,
                data: action.payload.data,
                page: action.payload.page,
                pageSize: action.payload.pageSize,
                errorMessage: '',
            };
        },
        getUserFailed: (
            state: UserState,
            action: PayloadAction<Pick<UserState, 'errorMessage'>>
        ) => {
            return {
                ...state,
                errorMessage: action.payload.errorMessage,
            };
        },
    },
});

export const UserReducer = reducer.reducer;
export const UserActions = reducer.actions;
