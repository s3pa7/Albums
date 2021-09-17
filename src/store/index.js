import {configureStore , getDefaultMiddleware} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import rootReducer from './albums';

import favorite from './favorite';
import uniqueAlbums from './uniqueAlbums';

const persistConfig = {
    key: 'root',
    storage,
}

const favoriteConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const persistedReducerFavorite = persistReducer(favoriteConfig, favorite);

const store = configureStore({
    /*reducer: persistedReducer,*/
    reducer:{
        root: persistedReducer,
        fav:persistedReducerFavorite,
        unique:uniqueAlbums,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;