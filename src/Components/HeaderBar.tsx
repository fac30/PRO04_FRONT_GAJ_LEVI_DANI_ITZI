import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import LoginModel from "./LoginModel";

export default function HeaderBar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLoginModelOpen, setIsLoginModelOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/logout";
  };

  const openLoginModel = () => setIsLoginModelOpen(true);
  const closeLoginModel = () => setIsLoginModelOpen(false);

  return (
    <div>
      <div className="absolute top-0 right-0 m-4 flex items-center">
        <CiShoppingCart size={30} className="mr-4" />
        <div id="profile" className="relative">
          <button className="dropdown-toggle flex items-center" onClick={toggleDropdown}>
            <FaUserCircle size={30} />
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <a href="/me" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Account</a>
              <button onClick={openLoginModel} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Login</button>
              <button onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
            </div>
          )}
          <LoginModel isOpen={isLoginModelOpen} onClose={closeLoginModel} />
        </div>
      </div>
    </div>
  );
}
