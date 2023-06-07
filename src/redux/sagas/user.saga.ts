import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import { UserActions } from '@/redux/reducers';
import { UserService } from '@/redux/services';
import { Pagination } from '@/types';

function* getUser(
    action: PayloadAction<Pick<Pagination, 'pageSize' | 'page'>>
): Generator {
    try {
        const response: any = yield call(UserService.getUser, action.payload);

        yield put(
            UserActions.getUsersSuccess({
                data: response.data,
                page: response.page,
                pageSize: response.pageSize,
                totalPage: response.totalPage,
                totalRecord: response.totalRecord,
            })
        );
    } catch (error) {
        yield put(UserActions.getUserFailed(error.message));
    }
}

export default function* watchUserSaga() {
    yield takeLatest(UserActions.getUsers, getUser);
}
