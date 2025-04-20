import React from "react";
import contactImg from "../assets/profile.jpg";

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen px-6 py-16 bg-emerald-900 text-white flex items-center justify-center">
      <div className="w-full max-w-2xl">
        {/*div for the profile picture*/}
        <div className="flex justify-center mb-6">
          <img
            src={contactImg}
            alt="A profile picture of a young student smiling, she wears a green coat and is posed in front of a nature background."
            className="w-40 sm:w-48 md:w-52 aspect-square object-cover rounded-full border-4 border-white shadow-lg transition-all duration-300"
          />
        </div>

        {/*header text*/}
        <h2 className="text-3xl font-bold text-center mb-2">Let's Connect</h2>
        <p className="text-lg text-center mb-10">
          I’d love to hear from you! Feel free to reach out using the info
          below.
        </p>

        {/*contact info: email, phone, LinkedIn*/}
        <div className="mx-auto w-fit text-lg space-y-4">
          <div className="grid grid-cols-[auto_1fr] gap-x-4">
            <span className="font-semibold text-right">Email:</span>
            <span>ha537956@ucf.edu</span>

            <span className="font-semibold text-right">Phone:</span>
            <span>555-768-3423</span>

            <span className="font-semibold text-right">LinkedIn:</span>
            <a
              href="www.linkedin.com/in/hannah-plumlee-a11021328"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300"
            >
              linkedin.com/in/yourprofile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
