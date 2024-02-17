import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

test("Find header and click to navigate", async () => {
  render(<App />);

  await screen.findByRole("AppBar-heading");
  await userEvent.click(screen.getByRole("AppBar-heading"));
  expect(screen.getByText("Users")).toBeTruthy();
});
