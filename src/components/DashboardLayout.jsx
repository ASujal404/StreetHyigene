// src/components/DashboardLayout.jsx
import React from "react";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto p-4">{children}</div>
    </div>
  );
};

export default DashboardLayout;
