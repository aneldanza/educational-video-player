import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "./videoSlice";


export const store = configureStore({
    reducer: {
        videos: videoSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type ApiDispatch = typeof store.dispatch;