import React, { useState } from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

export default function HeaderBar() {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value); // Update the state with the selected value

    if (value === "basket") {
      window.location.href = "/basket"; // Navigate to the basket page
    } else if (value === "logout") {
      localStorage.clear();
      window.location.href = "/logout"; // Navigate to the logout page
    }
  };

  return (
    <div>
      <div className="absolute top-0 right-0 m-4 flex items-center">
        <CiShoppingCart size={30} className="mr-4" />
        <div id="profile" className="relative">
          <button className="dropdown-toggle flex items-center">
            <FaUserCircle size={30} />
          </button>
          <select value={selectedOption} onChange={handleSelectionChange} className="ml-2">
            <option value="">Select an option</option>
            <option value="basket">Basket</option>
            <option value="logout">Logout</option>
          </select>
        </div>
      </div>
    </div>
  );
}
