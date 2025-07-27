import { Link } from "react-router-dom";

const Sidebar = () => (
  
  <div className="w-64 bg-blue-900 text-white p-4 h-screen">
    <h2 className="text-2xl font-bold mb-6">StreetSupply</h2>
    <ul className="space-y-4">
      <li><Link to="/" className="hover:text-yellow-300">🏠Home</Link></li>
      <li><Link to="/profile" className="hover:text-yellow-300">👤 My Profile</Link></li>
      <li><Link to="/login" className="hover:text-yellow-300">🔐 Login</Link></li>
      <li><Link to="/hygiene" className="hover:text-yellow-300">🧼 HygieneChecker</Link></li>
    </ul>
  </div>
);

export default Sidebar;
