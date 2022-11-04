import React from "react";

function Navbar() {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-center bg-white text-gray-500 hover:text-gray-700 focus:text-gray-700 border-b navbar navbar-expand-lg navbar-light">
      <div
        className="items-center flex flex-row justify-between w-4/5"
        id="navbarSupportedContent"
      >
        <a className="text-xl text-black" href="/*">
          Navbar
        </a>
        <ul className="navbar-nav flex flex-row pl-0 list-style-none">
          <li className="nav-item px-2">
            <a className="nav-link active" aria-current="page" href="#/*">
              Home
            </a>
          </li>
          <li className="nav-item pr-2">
            <a
              className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
              href="/*"
            >
              Features
            </a>
          </li>
          <li className="nav-item pr-2">
            <a
              className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
              href="/*"
            >
              Pricing
            </a>
          </li>
          <li className="nav-item pr-2">
            <a className="nav-link disabled text-gray-300 p-0">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
