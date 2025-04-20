import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profilePic from "/project/workspace/src/assets/profile.jpg";

const Home: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center min-h-screen bg-emerald-900 text-white py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img
        src={profilePic}
        alt="A profile picture of a young student smiling, she wears a green coat and is posed in front of a nature background."
        className="w-52 sm:w-60 md:w-72 lg:w-80 xl:w-96 aspect-square object-cover rounded-full border-4 border-white shadow-lg mb-6 transition-all duration-300"
      />

      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi! I'm Hannah</h1>
      <p className="text-lg md:text-xl max-w-xl mb-8 px-10">
        I'm senior Digital Media student at UCF with a passion for design and
        all things creative. Take a look around to see a few of my projects, or
        to learn more about me.
      </p>
      {/*links to each page,about me, projects, and contact*/}
      <div className="flex flex-col md:flex-row gap-4">
        <Link to="/about">
          <button className="w-40 bg-white text-slate-800 font-medium py-2 px-4 rounded-md hover:bg-slate-100 transition">
            About Me
          </button>
        </Link>
        <Link to="/projects">
          <button className="w-40 bg-white text-slate-800 font-medium py-2 px-4 rounded-md hover:bg-slate-100 transition">
            Projects
          </button>
        </Link>
        <Link to="/contact">
          <button className="w-40 bg-white text-slate-800 font-medium py-2 px-4 rounded-md hover:bg-slate-100 transition">
            Contact
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;
