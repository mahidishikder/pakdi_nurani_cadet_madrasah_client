import React, { useState } from "react";
import animationSignUp from "../../assets/login.json";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import SocialLogin from "../../conponents/SocialLogin/SocialLogin";

function SignUp() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-2">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://cdn.pixabay.com/video/2021/09/08/87786-602074234_tiny.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-900 opacity-50"></div>

      {/* Signup Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative bg-white py-6 px-14 rounded-2xl shadow-lg w-full max-w-lg text-center backdrop-blur-lg bg-opacity-90"
      >
        {/* Animation */}
        <div className="w-42 mx-auto mb-4">
          <Lottie animationData={animationSignUp} loop />
        </div>

        <h2 className="text-3xl  font-bold text-gray-800 mb-5">Sign up  to Pnkm</h2>

        <SocialLogin />
        <div className="divider text-sm text-gray-500">Or continue with</div>

        {/* Profile Picture Upload */}
        <div className="flex flex-col items-center mb-3">
          <label className="text-gray-600 text-sm mb-1">Profile Picture</label>
          <div className="relative w-20 h-20 border-2 border-gray-300 rounded-full overflow-hidden">
            {selectedImage ? (
              <img src={selectedImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                <img src="https://cdn-icons-gif.flaticon.com/11186/11186859.gif" alt="Profile Placeholder" />
              </div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 mt-2 border cursor-pointer rounded-md text-gray-400 placeholder-gray-400 focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Input Fields */}
        <form className="space-y-3">
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md text-gray-400 placeholder-gray-400 focus:ring-2 focus:ring-green-400"
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-md text-gray-400 placeholder-gray-400 focus:ring-2 focus:ring-green-400"
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="w-full px-3 py-2 border rounded-md text-gray-400 placeholder-gray-400 focus:ring-2 focus:ring-green-400"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="w-full bg-white ring-green-500 ring-1 font-semibold hover:text-white/80 py-2 rounded-md hover:bg-green-600 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-3">
          Already have an account?{" "}
          <Link to="/signIn" className="text-green-500 hover:underline">
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default SignUp;
