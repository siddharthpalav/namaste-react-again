import { CDN_URL } from "./../utils/constants";
import { useContext } from "react";
import UserContext from "./../utils/userContext";

const RestaurantCard = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;
  return (
    <div
      data-testid='resCard'
      className='m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300'
    >
      <img
        className='rounded-lg'
        alt='res-logo'
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className='font-bold py-2 text-xl'>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

// Higher Order Component

// input - RestaurantCard =>> RestaurantCardPromoted

export const WithPromotedVegRestaurant = (ParamsRestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className='absolute bg-black text-white m-2 p-2 rounded-lg'>
          Veg Promotion
        </label>
        <ParamsRestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
