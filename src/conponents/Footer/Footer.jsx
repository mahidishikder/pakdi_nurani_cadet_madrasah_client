import React from "react";

function Footer() {
  return (
    <div className="relative">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://cdn.pixabay.com/video/2023/11/11/188710-883612324_tiny.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay with Glassmorphism Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-md"></div>

      <footer className="relative text-white py-12 px-6 sm:px-12 bg-white/10 border-t border-white/20 rounded-t-2xl shadow-lg">
        <div className="container mx-auto grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          {/* Company Logo & Info */}
        
          <nav>
          <img src="https://i.ibb.co/rRjKJHzh/best-quality.png" alt="Company Logo"  className="w-40 cursor-pointer h-auto mb-4 rounded-lg shadow-md" />
          <h2 className="text-2xl font-semibold mb-4">Our Social Media</h2>
          <div className="flex gap-3">
              <img className="w-9 h-9 cursor-pointer" src="https://img.icons8.com/?size=48&id=118497&format=png" alt="" />
              <img className="w-8 h-8 cursor-pointer rounded-full" src="https://img.icons8.com/?size=48&id=xWVjuc9hryql&format=gif" alt="" />
              <img className="w-9 h-9 cursor-pointer" src="https://img.icons8.com/?size=48&id=19318&format=png" alt="" />
            </div>
            
          </nav>

          {/* Services Section */}
          <nav>
            <h6 className="text-lg font-semibold text-green-400 mb-3">Services</h6>
            <ul className="space-y-2 text-gray-300">
              <li><a className="hover:text-green-300 transition duration-300" href="#">Branding</a></li>
              <li><a className="hover:text-green-300 transition duration-300" href="#">Design</a></li>
              <li><a className="hover:text-green-300 transition duration-300" href="#">Marketing</a></li>
              <li><a className="hover:text-green-300 transition duration-300" href="#">Advertisement</a></li>
            </ul>
          </nav>

          {/* Company Section */}
          <nav>
            <h6 className="text-lg font-semibold text-green-400 mb-3">Company</h6>
            <ul className="space-y-2 text-gray-300">
              <li><a className="hover:text-green-300 transition duration-300" href="#">About us</a></li>
              <li><a className="hover:text-green-300 transition duration-300" href="#">Contact</a></li>
              <li><a className="hover:text-green-300 transition duration-300" href="#">Jobs</a></li>
              <li><a className="hover:text-green-300 transition duration-300" href="#">Press kit</a></li>
            </ul>
          </nav>

          {/* Legal Section */}
          <nav>
            <h6 className="text-lg font-semibold text-green-400 mb-3">Legal</h6>
            <ul className="space-y-2 text-gray-300">
              <li><a className="hover:text-green-300 transition duration-300" href="#">Terms of use</a></li>
              <li><a className="hover:text-green-300 transition duration-300" href="#">Privacy policy</a></li>
              <li><a className="hover:text-green-300 transition duration-300" href="#">Cookie policy</a></li>
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/20 pt-6 text-center text-gray-400 text-sm">
          <p className="text-white">Copyright © {new Date().getFullYear()} - All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;