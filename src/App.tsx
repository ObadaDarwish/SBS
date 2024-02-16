import React from "react";

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import InitTheme from "./Theme/InitTheme";
import router from "./router";
import { store } from "./Store";
import "./App.css";

function App() {
  return (
    <InitTheme>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </InitTheme>
  );
}

export default App;
