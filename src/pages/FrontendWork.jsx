import React from "react";
import FrontendCard from "../components/card-components/FrontendCard";
import { useNavigate } from "react-router-dom";
import taskLists from "../data/taskList.json";

const FrontendWork = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };

  const tasks = taskLists[0].tasks;

  return (
    <div className="bg-white ">
      <div className="flex justify-between bg-neutral p-5 lg:p-10 text-white items-center">
        <h1 className="font-semibold text-2xl primary-color ">Dinesh S</h1>
        <button
          className="btn btn-active btn-secondary "
          onClick={handleHomeClick}
        >
          Home
        </button>
      </div>
      <div className="bg-gray-400 font-semibold text-sm sm:text-lg lg:text-3xl text-center px-4 py-4 pt-5 lg:pt-10">
        <h1>
          Here is a list enumerating the majority of my professional endeavors
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 gap-10  bg-gray-400 px-4 py-4 justify-items-center pt-2  sm:pt-5 lg:pt-10 ">
        {tasks.map((task) => (
          <FrontendCard
            key={task.id}
            src={task.imgLink}
            title1={task.title}
            description1={task.description}
            tagone="HTML"
            tagtwo="CSS"
            tagthree="JavaScript"
            livelink={task.live}
            githuburl={task.github}
          />
        ))}
      </div>
      <div className="bg-gray-900 p-5">
        <div className="text-white flex justify-between space-x-14  items-center px-4 ">
          <p> Copyright© - 2024 </p>
          <p>
            Designed and Developed by :{" "}
            <a
              href="https://github.com/dineshdevelope/React-Portfolio"
              target="_blank"
              className="hover:font-semibold hover:text-pink-600"
            >
              S.Dinesh <span>💖</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrontendWork;
