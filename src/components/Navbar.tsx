import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-emerald-900 text-white shadow-md">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex flex-col items-center sm:flex-row justify-between">
          {/*title, centered above the links on small screens, set to the side on smaller screens*/}
          <div className="text-lg font-bold tracking-wide text-center mb-4 sm:mb-0">
            My Portfolio
          </div>

          {/*navigation links at the top of the page. Side by side on small screens and side by side on larger screens*/}
          <ul className="flex gap-2 flex-wrap justify-center sm:justify-start">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`px-3 py-2 rounded hover:bg-[#3f5f5f] transition ${
                    location.pathname === link.to ? "bg-[#3f5f5f]" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
