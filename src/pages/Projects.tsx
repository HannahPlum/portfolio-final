import React from "react";
import { Link } from "react-router-dom";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const Projects: React.FC = () => {
  return (
    <section className="min-h-screen px-6 py-16 max-w-6xl mx-auto bg-[#fff3f0] text-slate-800 rounded-lg shadow-inner">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="flex justify-center gap-8 flex-wrap">
        {/*the link to project one, rock paper scissors*/}
        <div className="text-center">
          <Link to="/projects/project-one">
            <img
              src={project1}
              alt="An image of a rock paper scissors mobile game"
              className="w-64 h-64 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 object-cover rounded-md mb-4 shadow-sm hover:opacity-90 transition"
            />
          </Link>
          <h3 className="text-xl font-semibold">Rock Paper Scissors</h3>
        </div>

        {/*the link to project 2, Flow Grow*/}
        <div className="text-center">
          <Link to="/projects/project-two">
            <img
              src={project2}
              alt="A flower sits above the words Flow Grow, a task managment application"
              className="w-64 h-64 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 object-cover rounded-md mb-4 shadow-sm hover:opacity-90 transition"
            />
          </Link>
          <h3 className="text-xl font-semibold">Flow Grow</h3>
        </div>

        {/*the link to project 3, Let's Workout*/}
        <div className="text-center">
          <Link to="/projects/project-three">
            <img
              src={project3}
              alt="Deep blue background with the words Let's Work Out surrounded by energetic circles"
              className="w-64 h-64 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 object-cover rounded-md mb-4 shadow-sm hover:opacity-90 transition"
            />
          </Link>
          <h3 className="text-xl font-semibold">Let's Workout</h3>
        </div>
      </div>
    </section>
  );
};

export default Projects;
