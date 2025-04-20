import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/*links to each page from the footer */}
        <div className="flex gap-6 mb-4 text-sm">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-200">
            About
          </Link>
          <Link to="/projects" className="hover:text-gray-200">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-gray-200">
            Contact
          </Link>
        </div>

        {/*my name in the footer as well as the stack used*/}
        <div className="text-center text-sm">
          <p>© Hannah Plumlee {new Date().getFullYear()}</p>
          <p className="mt-2">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
