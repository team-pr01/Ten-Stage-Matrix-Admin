/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../API/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: ({ stage, status, search }) => {
        const params = new URLSearchParams();

        if (stage && stage !== "All Stages") params.append("stage", stage);
        if (status && status !== "All") params.append("status", status);
        if (search) params.append("search", search);

        return {
          url: `/admin/users?${params.toString()}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    getAllDonations: builder.query({
      query: () => {
        return {
          url: `/admin/donations`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    getAllDeposits: builder.query({
      query: () => {
        return {
          url: `/admin/deposits`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    getAllWithdraw: builder.query({
      query: () => {
        return {
          url: `/admin/withdrawals`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    getAllCommissions: builder.query({
      query: () => {
        return {
          url: `/admin/stats`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    getSettingDetails: builder.query({
      query: () => {
        return {
          url: `/admin/settings`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    getAllWallets: builder.query({
      query: () => {
        return {
          url: `/admin/wallets`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["user"],
    }),

    sendEmailToOne: builder.mutation<any, any>({
      query: (data) => ({
        url: `/admin/email/send-email`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),

    sendBulkEmail: builder.mutation<any, any>({
      query: (data) => ({
        url: `/admin/email/send-bulk-email`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),

    sendEmailToAll: builder.mutation<any, any>({
      query: (data) => ({
        url: `/admin/email/send-all-email`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),

    changeUserStatus: builder.mutation<any, any>({
      query: (data) => ({
        url: `/admin/users/status`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),

    updateAdminWalletAddress: builder.mutation<any, any>({
      query: (data) => ({
        url: `/admin/settings`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),

    pauseSystem: builder.mutation<any, any>({
      query: (data) => ({
        url: `/admin/settings`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),

    updateSetting: builder.mutation<any, any>({
      query: (data) => ({
        url: `/admin/settings`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetAllDonationsQuery,
  useGetAllDepositsQuery,
  useGetAllWithdrawQuery,
  useGetAllCommissionsQuery,
  useGetSettingDetailsQuery,
  useGetAllWalletsQuery,
  useSendEmailToOneMutation,
  useSendBulkEmailMutation,
  useSendEmailToAllMutation,
  useChangeUserStatusMutation,
  useUpdateAdminWalletAddressMutation,
  usePauseSystemMutation,
  useUpdateSettingMutation,
} = adminApi;
