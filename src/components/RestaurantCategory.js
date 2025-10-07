import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, updateIndex }) => {
  // const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    console.log("clicked");
    updateIndex();
    // setShowItems(!showItems);
  };
  return (
    <div>
      {/**Header */}
      <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4'>
        <div className='flex justify-between' onClick={handleClick}>
          <span className='font-bold text-lg'>
            {data.title} ({data?.itemCards.length})
          </span>
          <span>\/</span>
        </div>
        {/** Accordian Body*/}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
