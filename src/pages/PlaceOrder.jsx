import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { FaRegEnvelope, FaUser, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8 justify-between items-start my-14 mx-[10%]">
      <div className="w-full lg:w-1/2">
        <h1 className="text-2xl font-bold mb-6">Delivery Information</h1>
        <form className="space-y-4">
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-4">
              <input
                className="border border-gray-300 rounded-md flex-1 py-2 px-3 focus:outline-none"
                type="text"
                placeholder="First name"
              />
              <input
                className="border border-gray-300 rounded-md flex-1 py-2 px-3 focus:outline-none"
                type="text"
                placeholder="Last name"
              />
            </div>
            <input
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
              type="email"
              placeholder="Email Address"
            />
            <input
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
              type="text"
              placeholder="Street"
            />
            <div className="flex space-x-4">
              <input
                className="border border-gray-300 rounded-md flex-1 py-2 px-3 focus:outline-none"
                type="text"
                placeholder="City"
              />
              <input
                className="border border-gray-300 rounded-md flex-1 py-2 px-3 focus:outline-none"
                type="text"
                placeholder="State"
              />
            </div>
            <div className="flex space-x-4">
              <input
                className="border border-gray-300 rounded-md flex-1 py-2 px-3 focus:outline-none"
                type="text"
                placeholder="Zip Code"
              />
              <input
                className="border border-gray-300 rounded-md flex-1 py-2 px-3 focus:outline-none"
                type="text"
                placeholder="Country"
              />
            </div>
            <input
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
              type="text"
              placeholder="Phone"
            />
          </div>
        </form>
      </div>

      <div className="w-full lg:w-1/2 my-14">
        <div className="bg-gray-100 rounded-md p-6">
          <h2 className="text-2xl font-bold mb-4">Cart Totals</h2>
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600">Subtotal</p>
            <p className="font-bold">${getTotalCartAmount()}</p>
          </div>
          <hr className="border-t border-gray-300 mb-4" />
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600">Delivery Fee</p>
            <p className="font-bold">${getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr className="border-t border-gray-300 mb-4" />
          <div className="flex justify-between items-center">
            <p className="font-bold">Total</p>
            <p className="font-bold">${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
          </div>
          <button className="mt-6 py-2 bg-orange-500 text-white rounded-lg px-6 hover:bg-orange-600 transition duration-200 focus:outline-none">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
