import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "./../mocks/mockRestaurantMenu.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Testing Cart Component", () => {
  it("Should Load Restaurant Menu Component", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    const accordionHeader = screen.getByText("Recommended (20)");
    fireEvent.click(accordionHeader);
    const foodItemsCount = screen.getAllByTestId("foodItems").length;
    expect(foodItemsCount).toBe(20);

    const addButtons = screen.getAllByRole("button", { name: "Add +" });
    console.log(addButtons.length);

    fireEvent.click(addButtons[0]);

    expect(screen.getByText("Cart(1 items")).toBeInTheDocument();

    fireEvent.click(addButtons[1]);

    expect(screen.getByText("Cart(2 items")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(7);

    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

    expect(screen.getAllByTestId("foodItems").length).toBe(5);

    expect(
      screen.getByText("Cart is empty. Add Items to the cart")
    ).toBeInTheDocument();
  });
});
