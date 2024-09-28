import React from "react";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import javascript from "../assets/images/javascript.png";
import tailwind from "../assets/images/tailwind.png";
import react from "../assets/images/react.png";
import node from "../assets/images/nodejs.png";
import express from "../assets/images/expressjs.png";
import mongodb from "../assets/images/mongodb.png";

const Skills = () => {
  return (
    <div>
      <div className=" border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3 sm:grid-cols-6  place-items-center md:flex md:justify-between md:items-center">
        <h2 className="text-gray-700 text-2xl md:text-4xl font-bold m-4">
          My {<br />} Tech {<br />} Stack
        </h2>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={html} alt="" className="mt-2" width={100} height={100} />
          <p>HTML</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={css} alt="" className="mt-2" width={100} height={100} />
          <p>CSS</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img
            src={tailwind}
            alt=""
            className="mt-2"
            width={100}
            height={100}
          />
          <p>Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img
            src={javascript}
            alt=""
            className="mt-2"
            width={100}
            height={100}
          />
          <p>JavaScript</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={react} alt="" className="mt-2" width={100} height={100} />
          <p>React</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={node} alt="" className="mt-2" width={100} height={100} />
          <p>Node</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={express} alt="" className="mt-2" width={100} height={100} />
          <p>Express</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={mongodb} alt="" className="mt-2" width={100} height={100} />
          <p>Mongo DB</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
