import { LOGO_URL } from "./../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render(just once)
  // if dependency array is (btnNameReact) => called everytime btnNameReact is updated
  useEffect(() => {
    console.log("useEffect called");
  });

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  console.log("header log", loggedInUser);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  return (
    <div className='flex justify-between bg-pink-200 shadow-lg sm:bg-yellow-100 lg:bg-green-50'>
      <div className='logo-container'>
        <img className='w-45' src={LOGO_URL} />
      </div>
      <div className='flex items-center'>
        <ul className='flex p-4 m-4'>
          <li className='px-4'>
            Online Status:{" "}
            {onlineStatus ? (
              <span className='bg-green-500'>Online</span>
            ) : (
              <span className='bg-red-500'>Offline</span>
            )}
          </li>
          <li className='px-4'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-4'>
            <Link to='/about'>About Us</Link>
          </li>
          <li className='px-4'>
            <Link to='/grocery'>Grocery</Link>
          </li>
          <li className='px-4'>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li className='px-4 font-bold text-xl'>
            <Link to='/cart'>Cart({cartItems.length} items)</Link>
          </li>
          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className='font-bold'>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
