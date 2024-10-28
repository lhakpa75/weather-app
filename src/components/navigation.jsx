import React, { useState } from "react";

function Navigation({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch(inputValue); // Pass the input value to the parent component
      setInputValue(""); // Clear the input field after search
    }
  };

  return (
    <div className="navbar bg-gray-300">
      {/* Left Section with Logo and Text */}
      <div className="flex items-center gap-4 flex-1">
        {/* Weather App Logo */}
        <div className="w-12">
          <img
            alt="weather app logo"
            src="src/assets/weather-91.png"
            className="object-cover"
          />
        </div>

        {/* Weather Text with Input */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-black">Weather in:</span>
          <div className="form-control">
            <input
              type="text"
              placeholder="Enter Location"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleSearch}
              className="input bg-gray-500 text-white placeholder-slate-50 input-bordered max-w-sm w-full md:w-auto p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              aria-label="Location Input"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
