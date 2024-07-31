import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-lg pt-10 pb-10 pl-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-5xl text-blue-950 font-bold">TUMEN</div>
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
