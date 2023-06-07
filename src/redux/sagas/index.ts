import { all, fork } from 'redux-saga/effects';

import watchAuthSaga from './auth.saga';
import watchUserSaga from './user.saga';

export default function* RootSaga() {
    yield all([fork(watchAuthSaga), fork(watchUserSaga)]);
}
