import React from "react";
import { assets } from "../assets/assets";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="mt-[4vh] bg-[#323232]">
      <div className="px-[5%] py-[3rem]">
        <div className="sm:flex sm:flex-row sm:justify-between flex flex-col space-y-10 w-[90%]">
          <div className="flex-[0.6]">
            <div>
            <img
              className="md:w-[150px] w-[120px] cursor-pointer lg:pt-[3rem] md:pt-[2rem] sm:pt-[1.7rem]"
              src={assets.logo}
              alt="logo"
            />
            </div>
            <p className="text-[#d9d9d9] md:text-[1rem] text-[0.7rem] pt-[3vh]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium explicabo, molestias quod aut illum nostrum dolorum
              fugiat repellat voluptas deleniti esse nihil porro vel, numquam ut
              repudiandae nulla, voluptate eaque!
            </p>
            <div className="flex space-x-4 pt-[3vh] md:text-[2rem] text-[1rem]">
              <FaFacebook className="text-white" />
              <FaSquareInstagram className="text-white" />
              <IoLogoLinkedin className="text-white" />
            </div>
          </div>
          <div className="text-[#d9d9d9]">
            <h1 className="font-extrabold md:text-[1.7rem] text-[1rem]">COMPANY</h1>
            <div className="flex flex-col pt-[2vh] md:text-[1rem] text-[0.7rem]">
              <p>Home</p>
              <p>About us</p>
              <p>Delivery</p>
              <p>Privacy policy</p>
            </div>
          </div>
          <div className="text-[#d9d9d9]">
            <h1 className="font-extrabold md:text-[1.7rem] text-[1rem]">GET IN TOUCH</h1>
            <div className="flex flex-col pt-[2vh] md:text-[1rem] text-[0.7rem]">
              <p>+1 123-345-5678</p>
              <p>tomato@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="py-10 sm:hidden">
          <hr />
        </div>
        <p className="text-[#989898] text-center sm:pt-[10vh] md:text-[1rem] text-[0.7rem]">
          Copyright 2024 &copy; Tomato.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
