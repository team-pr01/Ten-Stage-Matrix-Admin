/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../API/baseApi";

const stageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllStages: builder.query({
      query: () => {
        return {
          url: `/stages`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["stage"],
    }),

    getSingleStage: builder.query({
      query: (id) => ({
        url: `/stages/${id}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["stage"],
    }),

    getStageStats: builder.query({
      query: () => {
        return {
          url: `/stages/stats`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["stage"],
    }),

    // makeDeposit: builder.mutation<any, any>({
    //   query: (data) => ({
    //     url: `/transactions/deposit`,
    //     method: "POST",
    //     body: data,
    //     credentials: "include",
    //   }),
    //   invalidatesTags: ["deposit"],
    // }),

    // deleteReel: builder.mutation<any, string>({
    //   query: (id) => ({
    //     url: `/reels/${id}`,
    //     method: "DELETE",
    //     credentials: "include",
    //   }),
    //   invalidatesTags: ["deposit"],
    // }),

    updateStage: builder.mutation<any, any>({
      query: ({id, data}) => ({
        url: `/stages/${id}`,
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
