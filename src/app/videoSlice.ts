import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Video } from "../types";

export interface VideosState {
  videos: Video[];
}

const initialState: VideosState = {
  videos: [],
};

export const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    addVideo: (state, action: PayloadAction<Video>) => {
      state.videos.push(action.payload);
    },
    addVideos: (state, action: PayloadAction<Video[]>) => {
        state.videos = state.videos.concat(action.payload)
    }
  },
});

export const { addVideo, addVideos } = videoSlice.actions;

export default videoSlice.reducer