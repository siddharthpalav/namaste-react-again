import { useState, useEffect } from "react";
import { RESTAURANTS_URL } from "./../utils/constants";

const useBody = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // console.log("Link => ", Link);

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_URL);
    const json = await data.json();

    setListOfRestaurant(
      // optional chaining
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      // optional chaining
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional Rendering
  // if (listOfRestaurant.length === 0) {
  //   return <Shimmer />;
  // }

  // console.log("listOfRestaurant => ", listOfRestaurant);

  return {
    listOfRestaurant,
    filteredRestaurant,
    searchText,
    setSearchText,
    setListOfRestaurant,
    setFilteredRestaurant,
  };
};

export default useBody;
