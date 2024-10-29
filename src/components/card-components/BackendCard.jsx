import React from "react";
import { Link } from "react-router-dom";

const BackendCard = ({
  src,
  title1,
  description1,
  tagone,
  tagtwo,
  tagthree,
  githuburl,
}) => {
  return (
    <div>
      <div className="max-w-sm  overflow-hidden shadow-lg bg-white rounded-lg">
        <div className="flex justify-center ">
          <img
            className=" w-60 sm:w-80 h-52 mt-5 rounded-lg object-cover p-2"
            src={src}
            alt="Sunset in the mountains"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">{title1}</div>
          <p className="text-gray-700 text-base">{description1}</p>
        </div>
        <div className=" pt-4 flex justify-center">
          <div>
            <a
              className="btn btn-active btn-secondary"
              href={
                githuburl.startsWith("http")
                  ? githuburl
                  : `https://${githuburl}`
              }
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2 ">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            # {tagone}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            # {tagtwo}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            # {tagthree}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BackendCard;
