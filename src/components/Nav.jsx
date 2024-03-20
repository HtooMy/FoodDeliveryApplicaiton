import React from "react";
import { assets } from "../assets/assets";

const Nav = () => {
  return (
    <div className="w-[100%] h-[12vh] top-0 shadow-md">
      <div className="flex justify-between items-center w-[90%] h-[100%] mx-auto">
        <img className="md:w-[150px] w-[120px] cursor-pointer" src={assets.logo} alt="logo" />

        <ul className="flex gap-[3rem] text-[#495549] text-[18px] list-none items-center">
          <li className="nav-link">home</li>
          <li className="nav-link">menu</li>
          <li className="nav-link">mobile-app</li>
          <li className="nav-link">contact us</li>
        </ul>

        <div className="flex md:gap-[2rem] gap-[1rem] items-center">
          <img
            className="w-[1rem] h-[1rem] cursor-pointer"
            src={assets.search_icon}
            alt="search icon"
          />
          <div>
            <img
              className="w-[1rem] h-[1rem] cursor-pointer"
              src={assets.basket_icon}
              alt="basket icon"
            />
            <div></div>
          </div>
          <button className="text-[1rem] cursor-pointer text-[#49557e] bg-transparent border border-orange-500 rounded-[1rem] px-[1rem] py-[5px] hover:bg-[#fff4f2] transition-all duration-200">
            sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
