import React from "react";
import interactiveImage from "../assets/images/desktop/image-interactive.jpg";

const Features = () => {
  return (
    <section id="feature">
      <div className="container flex flex-col relative max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
        <img src={interactiveImage} alt="" />

        <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
          <h2 className="max-w-md mt-10 mb-6 font-sans text-4xl text-center mx-auto text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
            THE LEADER IN INTERACTIVE VR
          </h2>
          <p className="max-w-md text-center md:text-left">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experience that bind to their brand.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
