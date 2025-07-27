import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 flex flex-col md:flex-row items-center justify-center px-6 py-12">
      
      {/* Left Side */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
      >
        <h1 className="text-5xl font-bold text-orange-600 mb-4 drop-shadow">
          Welcome to StreetSupply
        </h1>

        <p className="text-lg text-gray-700 max-w-md mb-6">
          Empowering street food vendors to connect with trusted suppliers and streamline sourcing like never before.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <Link to="/vendor-dashboard">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl shadow-md"
            >
              Vendor Portal
            </motion.button>
          </Link>
          <Link to="/supplier-dashboard">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-xl shadow-md"
            >
              Supplier Portal
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, delay: 0.4 }}
      >
        <img
          src="/hero-food.png"
          alt="Street food supply"
          className="w-80 md:w-[400px] object-contain drop-shadow-lg rounded-xl"
        />
      </motion.div>
    </div>
  );
};

export default LandingPage;
