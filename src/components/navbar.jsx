import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">MyApp</div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-blue-500">
            Home
          </a>
          <a href="#" className="hover:text-blue-500">
            About
          </a>
          <a href="#" className="hover:text-blue-500">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
