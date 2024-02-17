import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import AppBar from "./AppBar";
import { BrowserRouter } from "react-router-dom";

test("Find header and click to navigate", async () => {
  render(
    <BrowserRouter>
      <AppBar />
    </BrowserRouter>,
  );

  await screen.findByRole("AppBar-heading");
  expect(screen.getByRole("AppBar-heading")).toHaveTextContent("SBS");
});
