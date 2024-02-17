import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINTS } from "../../constants";
import { IUserAlbum, IUsers } from "../../Types/Users.types";

export const USERS_API = createApi({
  reducerPath: "USERS_API",
  baseQuery: fetchBaseQuery({
    baseUrl: API_ENDPOINTS.JSON_PLACEHOLDER,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<IUsers[], void>({
      query: (name) => `/users`,
    }),
    getUser: builder.query<IUsers, string>({
      query: (id) => `/users/${id}`,
    }),
    getUserAlbums: builder.query<IUserAlbum, string>({
      query: (id) => `/users/${id}/albums`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserQuery, useGetUserAlbumsQuery } =
  USERS_API;
