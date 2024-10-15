import React from "react";
import upcoming from "../assets/upcoming.png";

const Projects = () => {
  return (
    <div
      className="bg-[#306398] min-h-screen mx-auto flex-col justify-center p-16 text-[#f0ede6]"
      id="projects"
    >
      <div className="pb-8 flex flex-col items-center">
        <p className="text-6xl mb-3 font-bold text-[#f0ede6]">Projects</p>
        <p className="text-[#f0ede6] font-mono">MY RECENT AND UPCOMING PROJECTS</p>
      </div>

      <div className="grid lg:grid-cols-2 lg:gap-16 gap-8">
        <div className="flex flex-col justify-center">
          <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#306398] group container rounded-3xl flex justify-center items-center md:h-[400px] h-[300px] bg-cover relative">
            <img
              src={upcoming}
              alt=""
              className="w-full h-full object-cover rounded-3xl"
            />
            {/* <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div> */}
          </div>
          <h2 className="text-center mt-4 text-2xl font-bold md:pt-4">Tasklist</h2>
          <p className="text-center font-mono italic">
            Task list application integrates with Google Calendar
            <br />
            to automatically import and categorize tasks
            <br />
            based on user-defined categories
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#306398] group container rounded-3xl flex justify-center items-center md:h-[400px] h-[300px] bg-cover relative">
            <img
              src={upcoming}
              alt=""
              className="w-full h-full object-cover rounded-3xl"
            />
            {/* <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div> */}
          </div>
          <h2 className="text-center mt-4 text-2xl font-bold md:pt-4">Budgee</h2>
          <p className="text-center font-mono italic">
            Budget planner integrated with your bank accounts,
            <br />
            allows you to securely view balances and track
            <br />
            expenses in real-time
            <br />
          </p>
        </div>
      </div>
    </div>
    // sample comment
  );
};

export default Projects;
