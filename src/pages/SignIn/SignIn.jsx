import React from "react";
import animationLogin from "../../assets/login.json";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import SocialLogin from "../../conponents/SocialLogin/SocialLogin";

function SignIn() {
  return (
    <div className="relative px-2 w-full min-h-screen flex items-center justify-center bg-gray-900">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
      >
        <source
          src="https://cdn.pixabay.com/video/2021/09/08/87786-602074234_tiny.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Sign In Form */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        {/* Lottie Animation */}
        <div className="w-48 mx-auto">
          <Lottie animationData={animationLogin} loop={true} />
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Log in to Pnkm
        </h2>
        <SocialLogin></SocialLogin>
        <div className="divider">Or</div>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-2 text-lg" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 mb-2 text-lg"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full ring-green-500 ring-1 bg-gray-100 text-black hover:text-white/80 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300 shadow-md"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to={`/signUp`} className="text-green-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default SignIn;
