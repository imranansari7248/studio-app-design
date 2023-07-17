import { useEffect, useState } from "react";
import React from "react";
import logo from "../assets/images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="hero">
      <div className=" container max-w-7xl mx-auto px-6 py-12 md:px-6 md:py-8">
        <nav className=" flex items-center justify-between font-bold text-white">
          <img src={logo} alt="logo" />

          <div className="hidden h-10 font-alata md:flex md:space-x-8">
            <div className="group">
              <a href="#">About</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50 duration-200"></div>
            </div>
            <div className="group">
              <a href="#">Carees</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50 duration-200"></div>
            </div>
            <div className="group">
              <a href="#">Evenst</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50 duration-200"></div>
            </div>
            <div className="group">
              <a href="#">Products</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50 duration-200"></div>
            </div>
            <div className="group">
              <a href="#">Support</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50 duration-200"></div>
            </div>
          </div>

          <div className="md:hidden">
            <button className={`${isOpen && 'open'} z-40 block hamburger focus:outline-none`} onClick={() => setIsOpen(!isOpen)}>
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </nav>

        <div className={`${isOpen ? 'block' : 'hidden'} absolute top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-90 z-30`}>
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-col space-y-8">
              <a href="#" className="text-4xl font-bold text-white">About</a>
              <a href="#" className="text-4xl font-bold text-white">Carees</a>
              <a href="#" className="text-4xl font-bold text-white">Events</a>
              <a href="#" className="text-4xl font-bold text-white">Products</a>
              <a href="#" className="text-4xl font-bold text-white">Support</a>
            </div>
            <div className="flex items-center justify-center mt-8">
              <button className="btn">Contact Us</button>
            </div>
          </div>
        </div>
        

        <div className="max-w-lg text-white text-4xl font-normal border-2 border-white p-4 mt-32 mb-32 md:p-10 md:m-32 md:text-6xl md:mx-0">
          IMPRESSIVE EXPERIENCES THAT DELIVER
        </div>
      </div>
    </section>
  );
};

export default Hero;
