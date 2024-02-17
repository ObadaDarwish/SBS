import { configureStore } from "@reduxjs/toolkit";

import { albumReducer, usersReducer } from "./Reducers";
import { USERS_API, PHOTOS_API } from "./API";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    album: albumReducer,
    [USERS_API.reducerPath]: USERS_API.reducer,
    [PHOTOS_API.reducerPath]: PHOTOS_API.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      USERS_API.middleware,
      PHOTOS_API.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
