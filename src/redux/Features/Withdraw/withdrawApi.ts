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
      providesTags: ["withdraw"],
    }),

    approveWithdraw: builder.mutation<any, any>({
      query: (id) => ({
        url: `/admin/withdrawals/${id}/approve`,
        method: "POST",
        body : {admin_note : ""},
        credentials: "include",
      }),
      invalidatesTags: ["withdraw"],
    }),

    rejectWithdraw: builder.mutation<any, any>({
      query: ({data, id}) => ({
        url: `/admin/withdrawals/${id}/reject`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["withdraw"],
    }),
  }),
});

export const {
  useGetAllWithdrawalsQuery,
  useApproveWithdrawMutation,
  useRejectWithdrawMutation,
} = withdrawApi;
