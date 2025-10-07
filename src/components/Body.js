import RestaurantCard, { WithPromotedVegRestaurant } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useBody from "./../utils/useBody";
import { useContext } from "react";
import UserContext from "../utils/userContext";

const Body = () => {
  const {
    listOfRestaurant,
    filteredRestaurant,
    searchText,
    setSearchText,
    setListOfRestaurant,
    setFilteredRestaurant,
  } = useBody();

  const RestaurantWithVegLabel = WithPromotedVegRestaurant(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='filter'>
        <div className='search m-4 p-4'>
          <input
            type='text'
            data-testid='searchInput'
            className='border border-solid to-black p-2'
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            className='px-4 py-2 bg-green-200 m-4 rounded-lg'
            onClick={() => {
              // Filter the restaurant cards and update the UI

              const searchedValue = listOfRestaurant.filter((restaurant) => {
                return restaurant?.info?.name
                  ?.toLowerCase()
                  .includes(searchText);
              });
              setFilteredRestaurant(searchedValue);
            }}
          >
            Search
          </button>
          <button
            className='px-4 py-2 bg-gray-300 rounded-lg'
            onClick={() => {
              const topRatedRestaurant = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurant(topRatedRestaurant);
            }}
          >
            Top Rated Restaurant
          </button>
          <label className='px-4 py-2'>UserName: </label>
          <input
            className='border border-solid to-black p-2'
            value={loggedInUser}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </div>

        <div className='res-container flex flex-wrap'>
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurant/" + restaurant?.info?.id}
            >
              {/**if the restaurant is of type veg then promote veg */}
              {restaurant?.info?.veg ? (
                <RestaurantWithVegLabel resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
