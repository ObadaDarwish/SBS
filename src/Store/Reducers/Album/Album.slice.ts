import { createSlice } from "@reduxjs/toolkit";
import { IAlbum } from "../../../Types/Album.types";
import { RootState } from "../../index";
import { PHOTOS_API } from "../../API";

interface AlbumState {
  albumImages: IAlbum[];
}

const initialState = {
  albumImages: [],
} as AlbumState;

const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addMatcher(
      PHOTOS_API.endpoints.getPhotos.matchFulfilled,
      (state, action) => {
        state.albumImages = action.payload as unknown as IAlbum[];
      },
    ),
});

export const getAlbumFullState = (state: RootState) => state.album;
export default albumSlice.reducer;
