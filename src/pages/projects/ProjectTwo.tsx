import React from "react";
import img1 from "../../assets/project2a.png";
import img2 from "../../assets/project2b.png";
import img3 from "../../assets/project2c.png";
import img4 from "../../assets/project2d.png";
import project2demo from "../../assets/project2demo.mp4";
import { Link } from "react-router-dom";

const ProjectTwo: React.FC = () => {
  return (
    <section className="min-h-screen px-6 py-16 max-w-5xl mx-auto text-slate-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Flow Grow
      </h2>

      <div className="flex overflow-x-auto gap-4 mb-12 pb-2 max-w-screen-sm mx-auto custom-scroll">
        <img
          src={img1}
          alt="A yellow and green flower logo with the leaves underneath spelling out the words FLOW GROW. There are two input fields for a username and a password, and a login button"
          className="w-[200px] h-auto rounded shadow shrink-0"
        />
        <img
          src={img2}
          alt="a soft cream background with a yellow task list, the list has green checkboxes beside each task. With tasks such as clean out car, and wash dishes. There is a green filter button, an add task button, and a red delete task button"
          className="w-[200px] h-auto rounded shadow shrink-0"
        />
        <img
          src={img3}
          alt="a white background with the logo and words New Task at the top, two yellow input fields for the task and due date, followed by two add and cancel buttons"
          className="w-[200px] h-auto rounded shadow shrink-0"
        />
        <img
          src={img4}
          alt="a white background with the logo and words Delete Task, showing the tasks available and red X boxes beside each task. Followed by a red delete button and green cancel button"
          className="w-[200px] h-auto rounded shadow shrink-0"
        />
        <video
          src={project2demo}
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
          Flow Grow is a task management app that I had a small idea for
          developing and then had the opportunity to flesh it out for an
          assignment in a Mobile Development class at UCF. The idea for the
          application stems from the concept that we work best when we are in
          our "flow". It's also a play on the word "flower", since when we are
          able to achieve our tasks and goals daily, we grow healthy habits.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          I started by creating the wireframe and design layout in Figma, then
          by selecting the bright color palette and designing the "Flow Grow"
          flower logo. Due to time constraints, the prototype application,
          developed with React Native, is missing some of the details from the
          design. However, in the future, I hope to develop my design and idea
          to its fullest potential. In the simple prototype, the user may create
          new tasks, name them, and then check them off once completed.
        </p>
        <p className="text-lg leading-relaxed">
          Check out an early prototype of this project{" "}
          <a
            href=" https://hannahplum.github.io/to-do-app/"
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

export default ProjectTwo;
