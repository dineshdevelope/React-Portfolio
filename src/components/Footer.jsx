import React from "react";

const Footer = () => {
  return (
    <div className="flex text-white justify-between mx-5">
      <div className="text-lg text-main-heading-color ">
        Copyright© - {new Date().getFullYear()}
      </div>
      <div>
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
  );
};

export default Footer;
