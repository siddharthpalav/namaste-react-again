import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
    console.log("item => ", item);
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div
            data-testid='fooditems'
            key={item.card.info.id}
            className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between'
          >
            <div className='w-9/12'>
              <div className='py-2'>
                <span>{item.card.info.name}</span>
                <span>
                  - ₹
                  {item.card.info.defaultPrice
                    ? item.card.info.defaultPrice / 100
                    : item.card.info.price / 100}
                </span>
              </div>
              <p className='text-xs'>{item.card.info.description}</p>
            </div>
            <div className='w-3/12 p-4 relative'>
              <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2'>
                <button
                  className='p-1 rounded-lg bg-black text-white shadow-lg'
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
              <img src={CDN_URL + item.card.info.imageId} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
