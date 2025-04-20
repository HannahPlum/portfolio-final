import React from "react";
import aboutme1 from "../assets/aboutme1.jpg";
import aboutme2 from "../assets/aboutme2.jpg";
import aboutme3 from "../assets/aboutme3.jpg";

const About: React.FC = () => {
  return (
    <section className="min-h-screen px-6 py-10 max-w-4xl mx-auto text-slate-800">
      {/*image gallery row. Images reduce in size on smaller screens, on the smallest screen size, only one image shows*/}

      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        <img
          src={aboutme1}
          alt="Photo of me 1"
          className="w-64 h-64 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 object-cover rounded-md mb-4"
        />
        <img
          src={aboutme2}
          alt="Photo of me 2"
          className="hidden sm:block w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 object-cover rounded-md mb-4"
        />
        <img
          src={aboutme3}
          alt="Photo of me 3"
          className="hidden sm:block w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 object-cover rounded-md"
        />
      </div>

      <div className="bg-[#fff3f0] rounded-xl p-8 shadow-sm">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          About Me
        </h2>

        {/*about me paragraphs*/}
        <p className="text-lg leading-relaxed mb-4">
          I'm a senior Digital Media student at UCF with a passion for creating
          clean, simple, and accessible websites, but I'm also a violinist and
          dedicated teacher!
        </p>

        <p className="text-lg leading-relaxed mb-4">
          Over the past nine years, I’ve had the privilege of teaching violin to
          students of all ages and abilities, which has deeply shaped my
          approach to supporting and connecting with others in the developer's
          world. I’ve learned that with the right guidance and encouragement,
          every individual is capable of far more than they initially believe.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          This belief in the potential of others is something I’m eager to carry
          with me into my career in Digital Media. My goal is to create spaces
          and experiences that make others feel supported and empowered. I want
          to infuse every project with the same care and dedication that I’ve
          always shown in my classroom, ensuring that the people around me
          —whether colleagues, clients, or users— feel valued and understood.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          I’ve worked on a variety of projects throughout my semesters at UCF:
          from creating wireframes and style guides in Figma, to designing and
          implementing small mobile applications, to building a Content
          Management System and movie review website. It has been a challenging
          and rewarding experience to grow in my abilities as a developer.
        </p>
        <p className="text-lg leading-relaxed">
          If you catch me away from my laptop, you'll likely find me playing my
          violin, reading, or creating in any medium. I would love to connect
          and talk all things dev and design, reach me at my contact page!
        </p>
      </div>
    </section>
  );
};

export default About;
