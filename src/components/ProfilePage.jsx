// src/components/ProfilePage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "Sujal Belkhode",
    email: "sujal@example.com",
    phone: "+91 98765 43210",
    location: "Nagpur, Maharashtra",
    role: "Vendor",
    profilePic: "https://avatars.githubusercontent.com/u/000000?v=4",
  });

  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(user);
  const [newImage, setNewImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    setEditing(!editing);
    setFormData(user);
    setNewImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const updatedUser = { ...formData };
    if (newImage) {
      updatedUser.profilePic = newImage;
    }
    setUser(updatedUser);
    setEditing(false);
    setNewImage(null);
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6">👤 Profile</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <motion.div
          className="flex-shrink-0 relative group"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={newImage || user.profilePic}
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover border-4 border-blue-500 shadow-lg transition"
          />

          {editing && (
            <label className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white px-2 py-1 text-xs rounded cursor-pointer group-hover:block">
              Change
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          )}
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["name", "email", "phone", "location", "role"].map((field) => (
              <div key={field}>
                <p className="text-gray-500 text-sm capitalize">{field}</p>
                {editing ? (
                  <input
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <h3 className="text-lg font-semibold text-gray-800">
                    {user[field]}
                  </h3>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 space-x-4">
            {editing ? (
              <>
                <motion.button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Save
                </motion.button>
                <motion.button
                  onClick={handleEditToggle}
                  className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Cancel
                </motion.button>
              </>
            ) : (
              <motion.button
                onClick={handleEditToggle}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Edit Profile
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfilePage;
