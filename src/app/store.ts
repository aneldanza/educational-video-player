import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import videoSlice from "./videoSlice";
import { videosApi } from "../api/createVideosApi";


export const store = configureStore({
    reducer: {
        videos: videoSlice,
        [videosApi.reducerPath]: videosApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(videosApi.middleware)
    }
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;