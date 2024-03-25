import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="mt-[100px] mx-[10%]">
      <div className="grid grid-cols-6 text-center">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <br />
      <hr />

      <div>
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="grid grid-cols-6 text-center my-3 items-center">
                  <div className="flex justify-center items-center col-span-1">
                    <img className="w-[80px]" src={item.image} alt="" />
                  </div>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <div className="flex justify-center items-center col-span-1">
                    <ImCross onClick={() => removeFromCart(item._id)} className="cursor-pointer" />
                  </div>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>

      <div className="mt-[3rem] ml-14">
        <div className="">
          <h2 className="font-bold text-[2rem]">Cart Totals</h2>
          <div className="text-[#747474] grid grid-cols-2 py-2">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr className="w-[53%]"/>
          <div className="text-[#747474] grid grid-cols-2 py-2">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>         
          </div>
          <hr className="w-[53%]"/>
          <div className="text-[#747474] grid grid-cols-2 py-2">
            <p className="font-bold">Total</p>
            <p>${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</p>
          </div>
          <button onClick={() => navigate("/order")} className="my-10 py-2 bg-orange-500 text-[#eaeaea] rounded-lg p-2 hover:bg-orange-600 hover:text-white transition-all duration-200">PROCCED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;



