import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Seems you are offline</h1>;

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, sla, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;

  // console.log(
  //   "itemCards => ",
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
  // );

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) => {
        return (
          item?.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return (
    <div className='text-center'>
      <h1 className='font-bold my-6 text-2xl'>{name}</h1>
      <p className='font-bold text-lg'>{cuisines.join(", ")}</p>
      <p>Delivery Time: {sla.slaString}</p>
      {categories.map((category, index) => {
        return (
          // Controlled component
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={showIndex === index ? true : false}
            updateIndex={() => {
              setShowIndex(index);
              console.log("updateIndex index=> ", index);
              console.log("updateIndex After showIndex=> ", showIndex);
            }}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
