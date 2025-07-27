import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Hygiene from "./components/Hygiene";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 overflow-y-auto p-4">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/hygiene" element={<Hygiene />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
