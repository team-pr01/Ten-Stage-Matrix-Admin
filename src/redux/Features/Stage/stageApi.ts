/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../API/baseApi";

const stageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllStages: builder.query({
      query: () => {
        return {
          url: `/admin/stages`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["stage"],
    }),

    getSingleStage: builder.query({
      query: (id) => ({
        url: `/admin/stages/${id}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["stage"],
    }),

    getStageStats: builder.query({
      query: () => {
        return {
          url: `/admin/stages/stats`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["stage"],
    }),

    updateStage: builder.mutation<any, any>({
      query: ({id, data}) => ({
        url: `/admin/stages/${id}`,
        method: "PUT",
        body : data,
        credentials: "include",
      }),
      invalidatesTags: ["stage"],
    }),
  }),
});

export const {
  useGetAllStagesQuery,
  useGetSingleStageQuery,
  useGetStageStatsQuery,
  useUpdateStageMutation,
} = stageApi;
