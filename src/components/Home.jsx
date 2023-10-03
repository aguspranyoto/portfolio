import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-2xl">Hi, My Name Is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          AGUS PRANYOTO
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm A Front End Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] text-2xl">
          I'm a frontend developer specializing in building website with React
          js. Currently I'm focused on building responsive web applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <a href="https://drive.google.com/file/d/1WaGngO6E9lSWcpyWonyygiuz9FRYxsOM/view?usp=sharing">
              View My Resume
            </a>
            <span className="group-hover:rotate-90 duration-300">
              {/* <HiArrowNarrowRight className="ml-3 " /> */}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
