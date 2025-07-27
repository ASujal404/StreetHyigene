import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 text-gray-800 flex flex-col items-center justify-between px-6 py-8">
      
      {/* Top Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mt-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-700 mb-6">
          Welcome to HygieneHub
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-700 mb-10">
          Empowering street food vendors to maintain hygiene standards and win trust. Start by checking your food stall’s hygiene today.
        </p>
        <Link
          to="/hygiene"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300"
        >
          Check Hygiene Now
        </Link>
      </motion.div>

      {/* Image Section */}
      <motion.img
        src="https://images.unsplash.com/photo-1576866209830-5ec4f60d47ca?auto=format&fit=crop&w=1470&q=80"
        alt="Street Food Hygiene"
        className="w-full max-w-4xl mt-12 rounded-xl shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />

      {/* Bottom Login Button */}
      <div className="w-full text-center mt-10">
        <p className="text-gray-600 mb-2">Already have an account?</p>
        <Link
          to="/login"
          className="inline-block bg-white text-green-600 border border-green-600 hover:bg-green-600 hover:text-white px-6 py-2 rounded-full text-md font-semibold transition duration-300"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
