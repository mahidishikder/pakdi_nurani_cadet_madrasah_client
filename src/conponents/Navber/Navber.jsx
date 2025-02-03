import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import MarqueeText from "../MarqueeText/MarqueeText";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { BsPersonAdd } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

function Navber() {
  const [currentDate, setCurrentDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "underline-offset-8 underline text-[#00A758] px-4 py-2 transition-all duration-300"
              : "px-4 py-2 transition-all duration-300"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/our-campuses"
          className={({ isActive }) =>
            isActive
              ? "underline-offset-8 underline text-[#00A758] px-4 py-2 transition-all duration-300"
              : "px-4 py-2 transition-all duration-300"
          }
        >
          Our Campuses
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive
              ? "underline-offset-8 underline text-[#00A758] px-4 py-2 transition-all duration-300"
              : "px-4 py-2 transition-all duration-300"
          }
        >
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/teachers"
          className={({ isActive }) =>
            isActive
              ? "underline-offset-8 underline text-[#00A758] px-4 py-2 transition-all duration-300"
              : "px-4 py-2 transition-all duration-300"
          }
        >
          Teachers
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/notice"
          className={({ isActive }) =>
            isActive
              ? "underline-offset-8 underline text-[#00A758] px-4 py-2 transition-all duration-300"
              : "px-4 py-2 transition-all duration-300"
          }
        >
          Notice
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/routine"
          className={({ isActive }) =>
            isActive
              ? "underline-offset-8 underline text-[#00A758] px-4 py-2 transition-all duration-300"
              : "px-4 py-2 transition-all duration-300"
          }
        >
          Routine
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "underline-offset-8 underline text-[#00A758] px-4 py-2 transition-all duration-300"
              : "px-4 py-2 transition-all duration-300"
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "underline-offset-8 underline text-[#00A758] px-4 py-2 transition-all duration-300"
              : "px-4 py-2 transition-all duration-300"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "underline-offset-8 underline text-[#00A758] px-4 py-2 transition-all duration-300"
              : "px-4 py-2 transition-all duration-300"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-white shadow-sm">
      <div className="bg-gray-100 py-2 ">
        <div className="container mx-auto flex    justify-between items-center">
          <div className="lg:flex gap-32 space-y-4 lg:space-y-0">
            <div className="flex items-center gap-2">
              <img src="https://img.icons8.com/?size=50&id=9730&format=png" alt="Phone Icon" className="w-5 h-5" />
              <p className="text-sm text-gray-700">01945918448, 01931584536</p>
            </div>
            <div className="flex items-center gap-1">
              <img className="w-5" src="https://img.icons8.com/?size=50&id=Ww1lcGqgduif&format=gif" alt="" />
              <h4 className="text-sm text-gray-700">helppnkm@gmail.com</h4>
            </div>
          </div>
          <div className="lg:flex gap-32 space-y-4 lg:space-y-0">
            <div className="gap-1 flex items-center">
              <img className="w-5" src="https://img.icons8.com/?size=50&id=o2FUebZ9P1nM&format=gif" alt="" />
              <p className="text-sm text-gray-700">{currentDate}</p>
            </div>
            <div className="flex gap-3">
              <img className="w-6 h-6" src="https://img.icons8.com/?size=48&id=118497&format=png" alt="" />
              <img className="w-6 h-6 rounded-full" src="https://img.icons8.com/?size=48&id=xWVjuc9hryql&format=gif" alt="" />
              <img className="w-6 h-6" src="https://img.icons8.com/?size=48&id=19318&format=png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <img className="cursor-pointer" src="https://i.ibb.co.com/rRjKJHzh/best-quality.png" alt="Logo" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex font-medium">{links}</ul>
          </div>
          <div className="navbar-end">
           <Link to={`signIn`}> <button className="bg-[#00bf63] py-2 px-6 lg:space-y-0 rounded text-sm font-semibold text-white hover:bg-[#00a758] transition-all duration-300 hidden lg:block">
              Sign in
            </button></Link>
            <button onClick={toggleMenu} className="lg:hidden btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Sidebar Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-50`}> 
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-600">
          ✖
        </button>
        <ul className="p-5 space-y-3 font-medium">{links}
        
            <div className="divider">social</div>
            <div className="flex justify-center gap-3">
              <img className="w-6 h-6" src="https://img.icons8.com/?size=48&id=118497&format=png" alt="" />
              <img className="w-6 h-6 rounded-full" src="https://img.icons8.com/?size=48&id=xWVjuc9hryql&format=gif" alt="" />
              <img className="w-6 h-6" src="https://img.icons8.com/?size=48&id=19318&format=png" alt="" />
            </div>

            <div className="divider">with</div>
        <div className="flex flex-col gap-3">
        <Link to={`signIn`}> <button className="bg-[#00bf63] flex gap-2 justify-center items-center py-2 px-6 lg:space-y-0 rounded text-sm font-semibold text-white w-full hover:bg-[#00a758] transition-all duration-300 ">
        <FaRegUser className="text-xl" /> Sign in
            </button></Link>
            <Link to={`signUp`}> <button className="ring-1 hover:bg-[#00bf63] ring-[#00bf63] text-black flex gap-2 justify-center items-center py-2 px-6 lg:space-y-0 rounded text-sm font-semibold  w-full  transition-all duration-300 ">
        <BsPersonAdd className="text-2xl" /> Sign up
            </button></Link>
        </div>
             <button className="bg-red-400 flex gap-2 justify-center items-center my-2 py-2 px-6 lg:space-y-0 rounded text-sm font-semibold text-white w-full hover:bg-[#00a758] transition-all duration-300 ">
            <LiaSignOutAltSolid className="text-2xl " /> Sign out
            </button>
        </ul>

      </div>
      <div>
        <MarqueeText></MarqueeText>
      </div>
    </div>
  );
}

export default Navber;