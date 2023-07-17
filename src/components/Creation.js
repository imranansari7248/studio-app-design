import React, { useEffect, useState } from "react";
import imgData from "../assets/imgData";

const Creation = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
  }, []);

  return (
    <section id="creation">
      <div className=" container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0 ">
        <div className=" flex justify-center mb-20 md:justify-between md:mx-10">
          <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
            Our Creations
          </h2>

          <button className="hidden btn  md:block">See All</button>
        </div>
        <div className=" flex flex-col flex-wrap justify-between w-full px-4 p-6 my-24 space-y-6 md:space-x-10 md:flex-row md:mx-24">
          {imgData.map((item) => {
            return (
              <div className="group relative overflow-hidden md:w-1/4">
                <img
                  src={isMobile ? item.mobileImage : item.desktopImage}
                  alt=""
                  className=" group-hover:scale-110 transform duration-300"
                />
                <div className=" absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
                <h2 className=" max-w-[200px] absolute bottom-0 left-0 font-light text-3xl text-white px-6 py-4 md:text-4xl md:group-hover:text-5xl  md:max-w-[300px] group-hover:text-black group-hover:text-4xl transform duration-300">
                  {item.title}
                </h2>
              </div>
            );
          })}
        </div>
        <button className="mx-auto btn  md:hidden">See All</button>
      </div>
    </section>
  );
};

export default Creation;
