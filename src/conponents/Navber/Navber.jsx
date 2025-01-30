import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import MarqueeText from "../MarqueeText/MarqueeText";



function Navber() {
  const [currentDate, setCurrentDate] = useState("");
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
  

  const links = (
    <>
      <li>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
          ? " underline-offset-8 underline text-[#00A758] px-4 py-2  transition-all duration-300"
          : "  px-4 py-2  transition-all duration-300"
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
              ? " underline-offset-8 underline text-[#00A758] px-4 py-2  transition-all duration-300"
              : "  px-4 py-2  transition-all duration-300"
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
          ? " underline-offset-8 underline text-[#00A758] px-4 py-2  transition-all duration-300"
          : "  px-4 py-2  transition-all duration-300"
      }
        >
          Gallery
        </NavLink>
        <NavLink
          to="/Notice"
          className={({ isActive }) =>
            isActive
          ? " underline-offset-8 underline text-[#00A758] px-4 py-2  transition-all duration-300"
          : "  px-4 py-2  transition-all duration-300"
      }
        >
          Notice
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
          ? " underline-offset-8 underline text-[#00A758] px-4 py-2  transition-all duration-300"
          : "  px-4 py-2  transition-all duration-300"
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
              ? " underline-offset-8 underline text-[#00A758] px-4 py-2  transition-all duration-300"
              : "  px-4 py-2  transition-all duration-300"
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
              ? " underline-offset-8 underline text-[#00A758] px-4 py-2  transition-all duration-300"
              : "  px-4 py-2  transition-all duration-300"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto flex justify-between items-center ">
         <div className="lg:flex gap-32">
         <div className="flex items-center gap-2">
            <img
              src="https://img.icons8.com/?size=50&id=9730&format=png"
              alt="Phone Icon"
              className="w-5 h-5"
            />
            <p className="text-sm text-gray-700">01945918448, 0172554415</p>
          </div>
          <div className="flex items-center gap-1">
            <img className="w-5 " src="https://img.icons8.com/?size=50&id=Ww1lcGqgduif&format=gif" alt="" />
            <h4 className="text-sm text-gray-700">helppnkm@gmail.com</h4>
          </div>
         </div>

         <div className="lg:flex gap-32">
         <div className=" gap-1 flex items-center ">
            <img className="w-5" src="https://img.icons8.com/?size=50&id=o2FUebZ9P1nM&format=gif" alt="" />
          <p className="text-sm text-gray-700">{currentDate}</p>

          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://img.icons8.com/?size=48&id=uLWV5A9vXIPu&format=png"
              alt="Social Icon 1"
              className="w-5 h-5"
            />
            <img
              src="https://img.icons8.com/?size=48&id=19318&format=png"
              alt="Social Icon 2"
              className="w-5 h-5"
            />
            <img
              src="https://img.icons8.com/?size=50&id=phOKFKYpe00C&format=png"
              alt="Social Icon 3"
              className="w-5 h-5"
            />
          </div>
         </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto ">
        <div className="navbar bg-base-100">
          {/* Left Side - Logo */}
          <div className="navbar-start">
            <div className="flex items-center">
              <img
                className=""
                src="https://i.ibb.co.com/rRjKJHzh/best-quality.png"
                alt="Logo"
              />
             
            </div>
          </div>

          {/* Middle - Desktop Navbar */}
          <div className="navbar-center hidden lg:flex">
            <ul className="flex font-medium">{links}</ul>
          </div>

          {/* Right Side - Mobile Menu and Sign Up Button */}
          <div className="navbar-end">
            <button className="bg-[#00bf63] py-2 px-4 rounded text-sm font-semibold text-white hover:bg-[#00a758] transition-all duration-300 hidden lg:block">
              Sign Up
            </button>

            {/* Mobile Menu */}
            <div className="dropdown  lg:hidden">
              <button
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              <ul
                tabIndex={0}
                className=" menu-sm font-medium space-y-3  bg-white ring-1 ring-[#00bf63]  dropdown-content mt-3 w-52 p-2 shadow shadow-[#00bf63] rounded-box z-50"
              >
                {links}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <MarqueeText></MarqueeText>
      </div>
    </div>
  );
}

export default Navber;