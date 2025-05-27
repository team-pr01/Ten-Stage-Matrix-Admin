/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../API/baseApi";

const depositApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getAllReels: builder.query({
    //   query: () => {
    //     return {
    //       url: `/reels`,
    //       method: "GET",
    //       credentials: "include",
    //     };
    //   },
    //   providesTags: ["deposit"],
    // }),

    // getSingleReel: builder.query({
    //   query: (id) => ({
    //     url: `/reels/${id}`,
    //     method: "GET",
    //     credentials: "include",
    //   }),
    //   providesTags: ["deposit"],
    // }),

    makeDeposit: builder.mutation<any, any>({
      query: (data) => ({
        url: `/transactions/deposit`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["deposit"],
    }),

    // deleteReel: builder.mutation<any, string>({
    //   query: (id) => ({
    //     url: `/reels/${id}`,
    //     method: "DELETE",
    //     credentials: "include",
    //   }),
    //   invalidatesTags: ["deposit"],
    // }),

    // updateReel: builder.mutation<any, any>({
    //   query: ({id, data}) => ({
    //     url: `/reels/${id}`,
    //     method: "PUT",
    //     body : data,
    //     credentials: "include",
    //   }),
    //   invalidatesTags: ["deposit"],
    // }),
  }),
});

export const {
  useMakeDepositMutation,
} = depositApi;
