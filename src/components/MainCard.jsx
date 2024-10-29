import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import hero from "../assets/images/dinesh.jpeg";
import { TypeAnimation } from "react-type-animation";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import javascript from "../assets/images/javascript.png";
import tailwind from "../assets/images/tailwind.png";
import react from "../assets/images/react.png";
import node from "../assets/images/nodejs.png";
import express from "../assets/images/expressjs.png";
import mongodb from "../assets/images/mongodb.png";
import aboutImg from "../assets/images/about.jpg";
import frontendImg from "../assets/images/frontend.jpg";
import backendImg from "../assets/images/backend.png";
import fullstackImg from "../assets/images/fullstack.png";
import fullstackImg2 from "../assets/images/fullstack2.png";
import { Link } from "react-router-dom";

const MainCard = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div>
        <div className="bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold primary-color ml-4">Dinesh S</h1>
          <ul className="hidden md:flex">
            <li className="p-5 hover:underline hover:text-white">
              <a href="#about">About</a>
            </li>
            <li className="p-5  hover:underline hover:text-white">
              <a href="#work">Works</a>
            </li>
            <li className="p-5  hover:underline  hover:text-white">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div onClick={handleNav} className="block md:hidden mr-6 ">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <div
            className={
              nav
                ? "fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500"
                : "fixed left-[-100%]"
            }
          >
            <h1 className="text-3xl primary-color px-4 pt-5">S.Dinesh</h1>
            <ul className="px-4 pt-2 text-2xl">
              <li className="p-2">
                <a href="#about" onClick={handleNav}>
                  About
                </a>
              </li>
              <li className="p-2">
                <a href="#work" onClick={handleNav}>
                  Works
                </a>
              </li>
              <li className="p-2">
                <a href="#contact" onClick={handleNav}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-20  max-w-[1200px]  md:h-[70vh] mx-auto py-8 bg-black">
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
                href="../assets/resume/Dinesh_CV.pdf"
                download="Dinesh.pdf"
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
      </div>
      <div className="px-3 ">
        <div className=" border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3 sm:grid-cols-6  place-items-center md:flex md:justify-between md:items-cente ">
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
            <img
              src={express}
              alt=""
              className="mt-2"
              width={100}
              height={100}
            />
            <p>Express</p>
          </div>

          <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
            <img
              src={mongodb}
              alt=""
              className="mt-2"
              width={100}
              height={100}
            />
            <p>Mongo DB</p>
          </div>
        </div>
      </div>
      <div>
        <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
          <div className="md:grid md:grid-cols-2 sm:gap-16">
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-8">
              <div className="my-auto mx-6">
                <h2 className="text-4xl font-bold mb-4 primary-color">
                  About Me
                </h2>
                <p className="text-base lg:text-lg font-extralight">
                  A Dedicated and Creative Web Designer and Developer with 06
                  months of Experience in Conceptualing, Designing, and
                  Implementing visually applealing and User-friendly websites.
                  Proficient in &nbsp;
                  <span className="font-medium primary-color">
                    HTML, CSS, JavaScript &nbsp;
                  </span>
                  and Responsive Designs. Experience in{" "}
                  <span className="font-medium primary-color">MERN </span>
                  &nbsp;stack such as MongoDB, Express.js, React.js, Node.js
                </p>
              </div>
            </div>
            <img
              className="mx-auto rounded-3xl py-8 md:py-0"
              src={aboutImg}
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-[1200px] mx-auto p-5" id="work">
          <div className="pb-8">
            <p className="text-4xl mb-3 font-bold primary-color">Work</p>
            <p className="text-gray-400">Check out of my recent works</p>
          </div>

          <div className="grid grid-cols-1  sm:grid-cols-3 gap-5 ">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src={frontendImg}
                  alt="frontend-project"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-pink-500 dark:text-white text-center ">
                    Frontend Projects
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Front-end projects developed using HTML, CSS, Tailwind CSS,
                  and React.js.
                </p>
                <Link
                  to={"/frontend"}
                  className=" bg-button  inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  explore more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src={backendImg}
                  alt="backend-project"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-pink-500 dark:text-white text-center ">
                    Backend Projects
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Back-end projects developed using Node Js and Express Js.
                </p>
                <Link
                  to={"/backend"}
                  className=" bg-button  inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  explore more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src={fullstackImg2}
                  alt="frontend-project"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-pink-500 dark:text-white text-center ">
                    Fullstack Projects
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Fullstack projects developed using MongoDB,Express Js,React
                  Js,Node Js (MERN).
                </p>
                <Link
                  to={"/fullstack"}
                  className=" bg-button  inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  explore more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-[1200px] mx-auto bg-black sm:py-20" id="contact">
          <div className="text-center">
            <h2 className="text-4xl font-bold leading-tight primary-color">
              Contact Me
            </h2>
          </div>
          <div className="max-w-[800px] mx-auto">
            <div className="mt-6 bg-[#161616] rounded-xl">
              <div className="p-10">
                <form action="https://getform.io/f/bdryjyxb" method="POST">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4 ">
                    <div>
                      <div className="mt-2.5 ">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter Your Name"
                          className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="mt-2.5 ">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter Your Email"
                          className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="mt-2.5 ">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Enter Your Message"
                          className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                        ></textarea>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex space-x-4 items-center text-white justify-between  max-w-[1200px] mx-auto px-5 pb-5">
          <div className="text-md sm:text-lg text-main-heading-color text-gray-300">
            Copyright© - {new Date().getFullYear()}
          </div>
          <div className="text-md sm:text-lg">
            Designed and Developed by: &nbsp;
            <a
              href="https://github.com/dineshdevelope"
              target="_blank"
              className="font-normal hover:underline hover:font-semibold primary-color"
            >
              S.Dinesh
            </a>
            &nbsp; ❤️
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
