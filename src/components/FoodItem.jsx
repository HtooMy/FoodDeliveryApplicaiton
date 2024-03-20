import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {

  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div data-aos="fade">
      <div className="shadow-md sm:hover:-translate-y-2 transition-all duration-300 relative">
        <img className="w-[100%] relative z-10" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="absolute cursor-pointer bottom-0 right-0 xl:my-40 my-44 mx-1 z-20"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="absolute cursor-pointer bottom-0 right-0 lg:my-40 my-44 mx-1 z-20 flex space-x-[1rem] items-center bg-white p-2 rounded-full">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p className="font-bold">{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
        <div className="p-[1rem]">
          <div className="flex justify-between">
            <p className="font-bold md:text-[1rem] text-[0.8rem]">{name}</p>
            <img className="w-[5rem] h-[1rem]" src={assets.rating_starts} alt="" />
          </div>
          <p className="my-[1rem] text-[#747474] md:text-[0.9rem] text-[0.7rem]">
            {description}
          </p>
          <p className="text-orange-500 font-extrabold md:text-[1rem] text-[0.8rem]">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
