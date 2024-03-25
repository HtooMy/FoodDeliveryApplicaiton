import React from "react";
import HeroImage from "../assets/header_img.png";
const Hero = () => {
  return (
    <div  data-aos="fade" className="md:mt-[3rem] mt-[1rem]">
      <div className="relative">
      <img
          className="z-[10] h-[500px] md:h-auto w-[90%] mx-auto relative object-cover"
          src={HeroImage}
          alt="hero image"
        />
        <div className="absolute inset-0 flex flex-col justify-center z-[12] w-[70%] mx-auto">
          <h2 className="font-bold text-white lg:text-[3rem] text-[2.5rem] lg:pt-1 pt-11">
            Order your 
          </h2>
          <h2 className="font-bold text-white lg:text-[3rem] text-[2.5rem]">
            favourite food here
          </h2>
          <p className="text-white py-[1rem] w-[70%] lg:block hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            pariatur laborum optio totam nulla facilis animi quos laudantium quo
            nihil ducimus, soluta omnis unde accusantium voluptates et
            reprehenderit, ullam quod.
          </p>
          <button className="lg:w-[10rem] md:w-[7rem] w-[10rem] mb-10 md:text-[1rem] text-[19px]  cursor-pointer text-[#49557e] bg-white rounded-[2rem] px-[2px] md:py-[10px] py-[5px] mt-[3rem] hover:bg-[#fff4f2] transition-all duration-200">
            View Menu
         </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
