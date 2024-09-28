import React from "react";
import hero from "../assets/images/dinesh.jpeg";
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 max-w-[1200px]  md:h-[70vh] mx-auto py-8 bg-black">
      <div className="col-span-1 my-auto mx-auto  w-[300px] h-auto lg:w-[400px]  ">
        <img
          src="https://github.com/dineshdevelope.png"
          alt="heroimage"
          className="rounded-full  mx-auto p-2"
        />
      </div>

      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="primary-color">I'm a</span>
          <br />
          <TypeAnimation
            sequence={[
              "Frontend Dev",
              1000,
              "Backend Dev",
              1000,
              "Web Designer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p className="text-white sm:text-lg my-6 lg:text-xl font-extralight">
          My name is Dinesh and I'm a Passionate &nbsp;
          <span className="primary-color font-semibold ">
            Full Stack Web Developer
          </span>
          &nbsp; &nbsp; I am interested in working on challenging web-based
          applications or projects, as well as utilizing my development
          knowledge to provide solutions for clients.
        </p>

        <div className="my-8 space-x-2">
          <a
            href="/"
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white"
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
