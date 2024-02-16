import { configureStore } from "@reduxjs/toolkit";

import { usersReducer } from "./Reducers";
import { USERS_API } from "./API/users.api";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [USERS_API.reducerPath]: USERS_API.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(USERS_API.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
