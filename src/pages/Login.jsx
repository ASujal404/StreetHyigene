import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate login (replace with real auth logic)
    if (email && password) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", email);

      // ✅ Redirect to Supplier List or Home
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-green-200">
      <motion.form
        onSubmit={handleLogin}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-green-700 text-center mb-6"
        >
          Login to HygieneHub
        </motion.h2>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-300"
        >
          Login
        </button>

        <p className="text-center text-sm mt-5 text-gray-600">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-green-600 font-semibold cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </motion.form>
    </div>
  );
};

export default Login;
