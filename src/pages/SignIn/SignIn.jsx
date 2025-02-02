import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://cdn.pixabay.com/video/2021/09/08/87786-602074234_tiny.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

      {/* Sign In Form */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="relative bg-white/20 backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-md border border-white/30"
      >
        <h2 className="text-2xl font-semibold text-center text-white mb-6">Sign In</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-white mb-1" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-transparent text-white placeholder-white/70"
              placeholder="Enter your email" 
              required
            />
          </div>
          <div>
            <label className="block text-white mb-1" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-transparent text-white placeholder-white/70"
              placeholder="Enter your password" 
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-white mt-4">
          Don't have an account?  <Link to={`/signUp`} className="text-green-300 hover:underline">Sign Up</Link>
        </p>
      </motion.div>
    </div>
  );
}

export default SignIn;
