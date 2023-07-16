import { useEffect, useState } from "react";
import React from "react";
import logo from "../assets/images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  const desktopMenu = (
    <div className="flex flex-col space-y-10 px-3 py-4 md:flex-row md:space-x-10 md:space-y-0">
      <a href="#features" className="hover:text-blue-200">
        About
      </a>
      <a href="#features" className="hover:text-blue-200">
        Careers
      </a>
      <a href="#features" className="hover:text-blue-200">
        Events
      </a>
      <a href="#features" className="hover:text-blue-200">
        Products
      </a>
      <a href="#features" className="hover:text-blue-200">
        Support
      </a>
    </div>
  );

  const mobileMenu = (
    <div
      className={`px-4 py-2 text-2xl ${
        isOpen
          ? " bg-black bg-opacity-75 absolute top-0 right-0 z-10 w-2/3 h-fll flex flex-col space-y-10 items-center justify-center text-xl"
          : ""
      }`}
    >
      {!isOpen ? (
        <button className="hover:text-blue-600" onClick={toggle}>
          <GiHamburgerMenu />
        </button>
      ) : (
        <button className="hover:text-blue-600" onClick={toggle}>
          <AiOutlineClose />
        </button>
      )}
      {isOpen && desktopMenu}
    </div>
  );

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
        </nav>

        <div className="max-w-lg text-white text-4xl font-normal border-2 border-white p-4 mt-32 mb-32 md:p-10 md:m-32 md:text-6xl md:mx-0">
          IMPRESSIVE EXPERIENCES THAT DELIVER
        </div>
      </div>
    </section>
  );
};

export default Hero;
