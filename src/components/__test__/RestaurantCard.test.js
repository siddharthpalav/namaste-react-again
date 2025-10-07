import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

describe("Test Restaurant Component", () => {
  it("Should render RestaurantCard component with props Data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();
  });

  // it("Should render RestaurantCard component with promoted veg restaurant", () => {
  //   // Home Work - test HOC: with promoted label
  // });
});
