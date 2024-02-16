import { createSlice } from "@reduxjs/toolkit";
import { USERS_API } from "../../API/users.api";
import { IUserAlbum, IUsers } from "../../../Types/Users.types";
import { RootState } from "../../index";

interface UsersState {
  usersList: IUsers[];
  userProfile: IUsers | null;
  userAlbums: IUserAlbum[];
}

const initialState = {
  usersList: [],
  userProfile: null,
  userAlbums: [],
} as UsersState;

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addMatcher(
        USERS_API.endpoints.getUsers.matchFulfilled,
        (state, action) => {
          state.usersList = action.payload as unknown as IUsers[];
        },
      )
      .addMatcher(
        USERS_API.endpoints.getUser.matchFulfilled,
        (state, action) => {
          state.userProfile = action.payload as unknown as IUsers;
        },
      )
      .addMatcher(
        USERS_API.endpoints.getUserAlbums.matchFulfilled,
        (state, action) => {
          state.userAlbums = action.payload as unknown as IUserAlbum[];
        },
      ),
});

// export const {} = usersSlice.actions;
export const getUsersFullState = (state: RootState) => state.users;
export default usersSlice.reducer;
