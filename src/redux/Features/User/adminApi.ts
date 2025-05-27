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

    
  }),
});

export const { useGetAllUsersQuery, useGetAllDonationsQuery, useGetAllDepositsQuery,} = adminApi;
