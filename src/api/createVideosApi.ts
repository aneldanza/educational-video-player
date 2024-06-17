import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseUrl =
  "https://take-home-assessment-423502.uc.r.appspot.com/api/videos";

interface videoParams {
  userId: string;
  description: string;
  videoUrl: string;
}

export const videosApi = createApi({
  reducerPath: "videos",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // uploadVideo: builder.query<any, videoParams>({
    //   query: (obj: videoParams) => {
    //     return {
    //       url: baseUrl,
    //       params: obj,
    //     };
    //   },
    // }),

    getVideoByUserId: builder.query<videoParams, string>({
      query: (userId) => {
        return {
            url: '/',
            params: {"user_id": userId}
        }
      }
    }),
  }),
});


export const { useGetVideoByUserId } = videosApi