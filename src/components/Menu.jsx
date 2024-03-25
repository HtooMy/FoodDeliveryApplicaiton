import React from "react";
import { menu_list } from "../assets/assets";

const Menu = ({ category, setCategory }) => {
  return (
    <div id="menu" data-aos="fade-right" className="mx-[5%] mt-[5vh]">
      <div className="">
        <h1 className="font-semibold text-[2rem]">
          Explore our menu
        </h1>
        <p className="md:w-[60%] w-[99%] md:pt-[1rem] pt-[0.5rem] text-[1rem]">
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mission is to satisfy your cravings and elevate your dinning
          experience, one delicious meal at a time.
        </p>
        <div className="pt-[2rem] flex space-x-[2rem] text-center overflow-x-scroll mx-[1%]">
          {menu_list.map((item, index) => {
            return (
              <div
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  )
                }
                className="flex-shrink-0 cursor-pointer"
                key={index}
              >
                <img
                  className={`md:size-[8rem] size-[5rem] sm:hover:border-4 sm:hover:border-orange-500 hover:rounded-full ${
                    category === item.menu_name ? "border-4 border-orange-500 rounded-full" : ""
                  }`}
                  src={item.menu_image}
                  alt="menu image"
                />
                <p className="my-[1rem] text-[#747474] text-[1rem]">
                  {item.menu_name}
                </p>
              </div>
            );
          })}
        </div>
        <div className="w-[100%] h-[3px] bg-[#e2e2e2] rounded-sm mt-[2vh]"></div>
      </div>
    </div>
  );
};

export default Menu;
