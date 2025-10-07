import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "./../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Test Body Component", () => {
  beforeAll(() => {
    console.log("Before All");
  });

  beforeEach(() => {
    console.log("Before Each");
  });

  afterAll(() => {
    console.log("After All");
  });

  afterEach(() => {
    console.log("After Each");
  });

  it("Should render the Body Component with Search", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const searchButton = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "pizza" } });

    fireEvent.click(searchButton);

    expect(searchButton).toBeInTheDocument();
  });

  it("Should search res list for pizza", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const searchButton = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "pizza" } });

    fireEvent.click(searchButton);

    // screen should load 4 res cards

    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBeGreaterThan(1);

    // expect(searchButton).toBeInTheDocument();
  });

  it("Should filter Top Rated Restaurant", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(8);

    const topRatedButton = screen.getByRole("button", {
      name: "Top Rated Restaurant",
    });

    fireEvent.click(topRatedButton);

    const cardsAfterFilter = screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.length).toBeGreaterThan(1);

    // const searchButton = screen.getByRole("button", { name: "Search" });

    // const searchInput = screen.getByTestId("searchInput");

    // fireEvent.change(searchInput, { target: { value: "pizza" } });

    // fireEvent.click(searchButton);

    // const cardsAfterSearch = screen.getAllByTestId("resCard");

    // expect(cardsAfterSearch.length).toBeGreaterThan(1);

    // expect(searchButton).toBeInTheDocument();
  });
});
