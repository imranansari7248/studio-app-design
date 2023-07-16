import React from "react";
import logo from "../assets/images/logo.svg";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <section id="footer">
      <div className=" max-w-7xl container flex flex-col justify-between items-center space-y-10 md:flex-row bg-black mt-24">
        <div className="flex flex-col px-10 py-8 md:text-left">
          <img src={logo} alt="" className="max-w-[150px]" />

          <nav className=" flex flex-col items-center justify-center space-y-5 mt-10 font-semibold text-sm md:flex-row md:space-x-10 text-white uppercase">
            <div className="group">
              <a href="#">about</a>
              <div className="mx-2 group-hover:border-b group-hover:border-b-white  transform duration-200"></div>
            </div>
            <div className="group">
              <a href="#">CAREERS</a>
              <div className="mx-2 group-hover:border-b group-hover:border-b-white  transform duration-200"></div>
            </div>
            <div className="group">
              <a href="#">Events</a>
              <div className="mx-2 group-hover:border-b group-hover:border-b-white  transform duration-200"></div>
            </div>
            <div className="group">
              <a href="#">products</a>
              <div className="mx-2 group-hover:border-b group-hover:border-b-white  transform duration-200"></div>
            </div>
            <div className="group">
              <a href="#">Suppot</a>
              <div className="mx-2 group-hover:border-b group-hover:border-b-white  transform duration-200"></div>
            </div>
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between space-y-10 mb-10 pb-20">

          <div className="flex mx-10 px-4 space-x-4 text-white text-2xl">
            <a href="#" className="text-lg">
              <AiFillInstagram size="40px" />
            </a>
            <a href="#" className="text-lg">
              <FaFacebookF size="40px" />
            </a>
            <a href="#" className="text-lg">
              <AiFillTwitterCircle size="40px" />
            </a>
            <a href="#" className="text-lg">
              <BsPinterest size="40px" />
            </a>
          </div>

          <div className="text-gray-400 text-md font-semibold mb-24">
            <p>© 2022 Loopstudios. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
