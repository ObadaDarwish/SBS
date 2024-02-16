import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import { ROUTER_PATHS } from "./constants";

import Users from "./Pages/Users";
import UsersProfile from "./Pages/UsersProfile";
const router = createBrowserRouter([
  {
    path: ROUTER_PATHS.DEFAULT,
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Users />,
      },
      {
        path: ":id",
        element: <UsersProfile />,
      },
    ],
  },
]);

export default router;
