import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { FetchBaseQueryMeta, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { Video } from "../types";

const baseUrl =
  "https://take-home-assessment-423502.uc.r.appspot.com/api";



export const videosApi = createApi({
  reducerPath: "videosApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getVideoByUserId: builder.query<Video, string>({
      query: (userId) => {
        return {
            url: '/videos',
            params: {"user_id": userId}
        }
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transformResponse: (res: any) => res.data,
      transformErrorResponse: (val: FetchBaseQueryError, meta: FetchBaseQueryMeta | undefined, arg: string ) => {
        console.log(val)
        console.log(meta)
        console.log(arg)
      }
    }),
  }),
});

export const { useGetVideoByUserIdQuery } = videosApi