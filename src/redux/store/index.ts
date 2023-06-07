import { configureStore, combineReducers } from '@reduxjs/toolkit';
import EncryptedStorage from 'react-native-encrypted-storage';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import createSagaMiddleware from 'redux-saga';

import { Redux } from '../types';
import {
    AuthReducer,
    AlertReducer,
    LoadingReducer,
    UserReducer,
} from '@/redux/reducers';
import RootSaga from '@/redux/sagas';

// config redux-persist
const persistConfig = {
    key: 'root',
    storage: EncryptedStorage,
    timeout: 30000,
    stateReconciler: autoMergeLevel2,
    blacklist: [Redux.alert],
};

const rootReducers = combineReducers({
    auth: AuthReducer,
    alert: AlertReducer,
    loading: LoadingReducer,
    user: UserReducer,
});

type RootState = ReturnType<typeof rootReducers>;
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducers);

const sagaMiddleware = createSagaMiddleware();

const createDebugger = require('redux-flipper').default;

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(createDebugger(), sagaMiddleware),
});

sagaMiddleware.run(RootSaga);

export const persistor = persistStore(store);
