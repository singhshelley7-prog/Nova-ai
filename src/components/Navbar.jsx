import { NavLink } from "react-router-dom";
import { useState } from "react";
import { TbBrandSupernova } from "react-icons/tb";
import SignIn from "../pages/SignIn";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative w-full bg-[#1d3e6d] border-b border-white/10">

      {/* Main Navbar */}
      <div className=" mx-auto px-6 py-5 flex items-center justify-between">

       {/* Logo */}
     <NavLink
        to="/"
        className="flex items-center gap-2 text-2xl font-bold"
      >
      <TbBrandSupernova className="text-3xl" />
      <span>NOVA</span>
      </NavLink>
      
        {/*  Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">

          <a
            href="#features"
            className="hover:text-white transition"
          >
            Features
          </a>

          <a
            href="#pricing"
            className="hover:text-white transition"
          >
            Pricing
          </a>

          <a
            href="#testimonials"
            className="hover:text-white transition"
          >
            Testimonials
          </a>

          <a
            href="#faq"
            className="hover:text-white transition"
          >
            FAQ
          </a>

        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">

          <NavLink
            to="/signin"
            className="px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white transition"
          >
            Sign In
          </NavLink>

          <NavLink
            to="/startfreetrial"
            className="px-5 py-2.5 rounded-lg bg-cyan-400 text-[#081A33] font-semibold hover:bg-cyan-300 transition"
          >
            Start Free Trial
          </NavLink>

        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full md:hidden bg-[#081A33] border-t border-white/10 px-6 py-6 z-50">

          <div className="flex flex-col gap-5 text-gray-300">

            <a
              href="#features"
              className="hover:text-white transition"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </a>

            <a
              href="#pricing"
              className="hover:text-white transition"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </a>

            <a
              href="#testimonials"
              className="hover:text-white transition"
              onClick={() => setMenuOpen(false)}
            >
              Testimonials
            </a>

            <a
              href="#faq"
              className="hover:text-white transition"
              onClick={() => setMenuOpen(false)}
            >
              FAQ
            </a>

            <NavLink
              to="/signin" element={SignIn}
              className="hover:text-white transition"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </NavLink>

            <NavLink
              to="/startfreetrial"
              className="w-full text-center px-5 py-3 rounded-lg bg-cyan-400 text-[#081A33] font-semibold hover:bg-cyan-300 transition"
              onClick={() => setMenuOpen(false)}
            >
              Start Free Trial
            </NavLink>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;