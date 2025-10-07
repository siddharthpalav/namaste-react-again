import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import appStore from "./../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

describe("My Header Test cases", () => {
  it("Should load Header Component  with a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    // This is a good way
    const loginButton = screen.getByRole("button", { name: "Login" });

    // This way is okay, not that good
    // const loginButton = screen.getByText("Login");

    expect(loginButton).toBeInTheDocument();
  });

  it("Should load Header Component  with Cart Details", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart(0 items)");

    expect(cartItems).toBeInTheDocument();
  });

  it("Should change Login Button to Logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });

    expect(logoutButton).toBeInTheDocument();
  });
});
