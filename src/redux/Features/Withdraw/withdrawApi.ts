/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../API/baseApi";

const withdrawApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllWithdrawals: builder.query({
      query: () => {
        return {
          url: `/admin/withdrawals`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    approveWithdraw: builder.mutation<any, any>({
      query: ({data, id}) => ({
        url: `/admin/withdrawals/${id}/approve`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["deposit"],
    }),

    rejectWithdraw: builder.mutation<any, any>({
      query: ({data, id}) => ({
        url: `/admin/withdrawals/${id}/reject`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["deposit"],
    }),
  }),
});

export const {
  useGetAllWithdrawalsQuery,
  useApproveWithdrawMutation,
  useRejectWithdrawMutation,
} = withdrawApi;
