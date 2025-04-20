import React from "react";
import img1 from "/project/workspace/src/assets/project3a.png";
import img2 from "/project/workspace/src/assets/project3b.png";
import img3 from "/project/workspace/src/assets/project3c.png";
import img4 from "/project/workspace/src/assets/project3d.png";
import project3demo from "/project/workspace/src/assets/project3demo.mp4";
import { Link } from "react-router-dom";

const ProjectThree: React.FC = () => {
  return (
    <section className="min-h-screen px-6 py-16 max-w-5xl mx-auto text-slate-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Let’s Workout
      </h2>

      <div className="flex overflow-x-auto gap-4 mb-12 pb-2 max-w-screen-sm mx-auto custom-scroll">
        <img
          src={img1}
          alt="Red white and yellow circles merge behind white words that say Let's Work Out. The background is a deep blue"
          className="w-[200px] h-auto rounded shadow shrink-0"
        />
        <img
          src={img2}
          alt="Three white buttons with a blue border sit in front of a red background. The each button has one word Plank , Pushups, and Running "
          className="w-[200px] h-auto rounded shadow shrink-0"
        />
        <img
          src={img3}
          alt="A blue header with the word PushUps sits above an image of a person demonstrating a pushup. Underneath this are two buttons, one with a repetition counter and one with the word Start! "
          className="w-[200px] h-auto rounded shadow shrink-0"
        />
        <img
          src={img4}
          alt="A blue header with the word Running sits above an image of a person demonstrating a run. Underneath this are two buttons, one with a timer and one with the word Start! "
          className="w-[200px] h-auto rounded shadow shrink-0"
        />
        <video
          src={project3demo}
          muted
          controls
          controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
          disablePictureInPicture
          className="w-[200px] h-auto rounded shadow shrink-0 object-contain bg-black"
        />
      </div>

      {/* Description */}
      <div className="bg-[#fff3f0] p-6 rounded shadow">
        <p className="text-lg leading-relaxed mb-4">
          Let’s Workout is a fun, energetic fitness planning app that encourages
          users to build custom routines and track their progress. It was
          created for a React assignment in a Mobile Development class at UCF.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          The original design, seen in the gallery above, was created in Figma.
          The prototype developed with React has more features, such as the
          ability to record multiple laps like a stop watch, start a timer that
          counts from zero, and a button to count exercise reps. The design is
          lacking a few visuals from the Figma prototype, but will hopefully be
          an addition to a future rendition.
        </p>
        <p className="text-lg leading-relaxed">
          Check out the React prototype of this project{" "}
          <a
            href="https://hannahplum.github.io/react-exercise-app-updated/"
            target="_blank"
            className="underline text-emerald-900 hover:text-emerald-700"
          >
            on Github Pages!
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

export default ProjectThree;
