import React from "react";
import { Link } from "react-router-dom";
import homeImage from "../assets/cloth/home.jpg";
import BestSeller from "./BestSeller";

const Home = () => {
  return (
    <div>
      <div className="relative w-full h-[450px] sm:h-[550px] overflow-hidden">
        <img
          src={homeImage}
          alt="Home showcase"
          className="w-full h-full object-cover blur-sm"
        />

        <div className="absolute inset-0 bg-black/10"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6">
          <div className="">
            <h1 className="font-semibold text-3xl sm:text-5xl">
              Welcome to our shop
            </h1>
            <p className="font-light text-3xl mt-7 text-center">
              Fast & Reliable Shipping.
            </p>
          </div>
          <div className="flex">
            <Link
              to="/shop"
              className="border-2 border-white text-white font-bold rounded-xl bg-black/20 backdrop-blur-xs hover:bg-white hover:text-black transition duration-300 mx-4"
            >
              <div className="my-2 mx-2">Shop Now</div>
            </Link>
          </div>
        </div>
      </div>
      <BestSeller />
    </div>
  );
};

export default Home;
