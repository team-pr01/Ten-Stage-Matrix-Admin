/* eslint-disable @typescript-eslint/no-explicit-any */
import type { BaseQueryApi } from "@reduxjs/toolkit/query/react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { FetchArgs } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { setUser } from "../Features/Auth/authSlice";
import type { RootState } from "../store";
import type { DefinitionType } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.tsmnews.com/api",
  // baseUrl: "https://test.adamocorporationltd.com/api",
  // baseUrl: "https://api.adamocorporationltd.com/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    const res = await fetch(
      "https://api.tsmnews.com/api/v1/auth/refresh-token",
      {
        credentials: "include",
      }
    );

    const data = await res.json();
    const user = (api.getState() as RootState).auth.user;
    api.dispatch(
      setUser({
        user,
        token: data?.data?.accessToken,
      })
    );
    result = await baseQuery(args, api, extraOptions);
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["user", "deposit", "withdraw", "stage"],
  endpoints: () => ({}),
});

// export const { } = baseApi;
