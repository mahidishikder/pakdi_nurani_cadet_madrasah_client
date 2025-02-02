import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1" htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your full name" 
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email" 
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password" 
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4">
          Already have an account? <Link to={`/signIn`} className="text-blue-500 hover:underline">Sign In</Link>
        </p>
      </motion.div>
    </div>
  );
}

export default SignUp;