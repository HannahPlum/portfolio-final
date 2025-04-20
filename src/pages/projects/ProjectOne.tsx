import React from "react";
import img1 from "../../assets/project1a.png";
import img2 from "../../assets/project1b.png";
import img3 from "../../assets/project1c.png";
import img4 from "../../assets/project1d.png";
import img5 from "../../assets/project1e.png";
import img6 from "../../assets/project1f.png";
import project1demo from "../../assets/project1demo.mp4";
import { Link } from "react-router-dom";

const ProjectOne: React.FC = () => {
  return (
    <section className="min-h-screen px-6 py-16 max-w-5xl mx-auto text-slate-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Rock Paper Scissors
      </h2>

      {/*project image gallery*/}
      <div className="flex overflow-x-auto gap-4 mb-12 pb-2 max-w-screen-sm mx-auto custom-scroll">
        <video
          src={project1demo}
          muted
          controls
          controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
          disablePictureInPicture
          className="w-[200px] h-auto rounded shadow shrink-0 object-contain bg-black"
        />

        <img
          src={img1}
          alt="A light blue background with the words Rock Paper Scissors in white, and three cartoon characters representing the options in the game"
          className="w-[200px] h-auto rounded shadow shrink-0"
        />
        <img
          src={img2}
          alt="A yellow background with white buttons options for a New Game and Online Play"
          className="w-[200px] h-auto rounded shadow shrink-0"
        />
        <img
          src={img3}
          alt="The words Pick Your Fighter on a yellow background, with three selection options: Rock, Paper, or Scissors"
          className="w-[200px] h-auto rounded shadow shrink-0"
        />
        <img
          src={img4}
          alt="white cards against a yellow background that say tap to reveal"
          className="w-[200px] h-auto rounded shadow shrink-0"
        />
        <img
          src={img5}
          alt="white cards against a yellow background that show scissors and paper, with the words you lose"
          className="w-[200px] h -auto rounded shadow shrink-0"
        />
        <img
          src={img6}
          alt="A blue help page with a white button that says tutorial"
          className="w-[200px] h-auto rounded shadow shrink-0"
        />
      </div>

      {/*description of the app*/}
      <div className="bg-[#fff3f0] p-6 rounded shadow">
        <p className="text-lg leading-relaxed mb-4">
          This Rock Paper Scissors game was created for an Interactive Design
          class at UCF. It was created using Figma, and was solely used as a
          high fidelity prototype for the class assignment. However, I believe
          this app would work well if redesigned with React for Mobile
          Applications.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          The application was inspired by the game "Rock Paper Scissors" which
          is typically played with hands and two players. I wanted the user to
          have the ability to play Rock Paper Scissors, even if a second player
          was not available. The user may play against a randomized computer, or
          select "online play" to test their skill against another human online.
        </p>
        <p className="text-lg leading-relaxed">
          Check out this project{" "}
          <a
            href="https://www.figma.com/proto/KhibyCx5Lx0S6hXIWzltFP/Rock-paper-scissors-project?page-id=0%3A1&node-id=1-2&p=f&viewport=210%2C198%2C0.23&t=zSlFsgYTGOAODik7-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2"
            target="_blank"
            className="underline text-emerald-900 hover:text-emerald-700"
          >
            on Figma!
          </a>
        </p>
      </div>
      <div className="text-center mt-10">
        <Link to="/projects" className="text-emerald-700 hover:underline">
          ← Back to Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectOne;
