import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

export default function HeaderBar() {
  return (
      <div>
          
          <div className="absolute top-0 right-0 m-4 flex items-center">
              <CiShoppingCart size={30} className="mr-4" />
              <div id="profile" className="relative">
                  <button className="dropdown-toggle flex items-center"><FaUserCircle size={30} /></button>
                  <div className="dropdown-menu absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <a href="/basket" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Basket</a>
                      <button onClick={() => {
                          localStorage.clear();
                          window.location.href = "/logout";
                      }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
                  </div>
              </div>
          </div>

    </div>
  )
}
