import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINTS } from "../../constants";
import { IAlbum } from "../../Types/Album.types";

export const PHOTOS_API = createApi({
  reducerPath: "PHOTOS_API",
  baseQuery: fetchBaseQuery({
    baseUrl: API_ENDPOINTS.JSON_PLACEHOLDER,
  }),
  endpoints: (builder) => ({
    getPhotos: builder.query<IAlbum[], string>({
      query: (albumId) => `/photos?albumId=${albumId}`,
    }),
  }),
});

export const { useGetPhotosQuery } = PHOTOS_API;
