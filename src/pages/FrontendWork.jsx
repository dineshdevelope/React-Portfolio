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
      <div className="grid sm:grid-cols-2 gap-10  bg-gray-400 px-4 py-4 justify-items-center pt-10 ">
        <FrontendCard
          src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg"
          title1="My Resume"
          description1="During the six-month internship at CyberDude Networks (Pvt) Ltd, the task assigned was to assess the proficiency level in HTML and vanilla CSS as part of measuring the interns' knowledge."
          tagone="HTML"
          tagtwo="CSS"
          tagthree="Javascript"
          livelink=""
          githuburl=""
        />
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
    </div>
  );
};

export default FrontendWork;
