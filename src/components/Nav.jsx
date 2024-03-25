import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Nav = ({ setShowLogin }) => {

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div id="home" className="w-[100%] h-[12vh] top-0 shadow-md">
      <div className="flex justify-between items-center w-[90%] h-[100%] mx-auto">
        <Link to="/">
          <img
            className="md:w-[150px] w-[120px] cursor-pointer"
            src={assets.logo}
            alt="logo"
          />
        </Link>
        <ul className="flex gap-[3rem] text-[#495549] text-[18px] list-none items-center">
          <Link to="/"><li className="nav-link">home</li></Link>
          <a href="#menu"><li className="nav-link">menu</li></a>
          <a href="#footer"><li className="nav-link">contact us</li></a>
        </ul>

        <div className="flex md:gap-[2rem] gap-[1rem] items-center">
          <img
            className="w-[1rem] h-[1rem] cursor-pointer"
            src={assets.search_icon}
            alt="search icon"
          />
          <div className="relative">
            <Link to="/cart">
              <img
                className="w-[1rem] h-[1rem] cursor-pointer"
                src={assets.basket_icon}
                alt="basket icon"
              />
              <div className={getTotalCartAmount() === 0?"":"absolute bg-orange-500 w-[10px] h-[10px] -top-[10px] right-[1px] rounded-full"}></div>
            </Link>
          </div>
          <button
            onClick={() => setShowLogin(true)}
            className="text-[1rem] cursor-pointer text-[#49557e] bg-transparent border border-orange-500 rounded-[1rem] px-[1rem] py-[5px] hover:bg-[#fff4f2] transition-all duration-200"
          >
            sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
