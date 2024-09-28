import React from "react";
import aboutImg from "../assets/images/about.jpg";

const About = () => {
  return (
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
  );
};

export default About;
