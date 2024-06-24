import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav">
      <div>
        <Link to="/">
          <h1 className="text-4xl font-signature ml-2  hover:text-orange-600">Admin</h1>
        </Link>
      </div>

      <ul className="hidden md:flex">
        <li className=" px-4 text-4xl font-signature ml-2 hover:scale-105  hover:text-orange-600">
          <Link to="/">Project</Link>
        </li>
        <li className="px-4 text-4xl font-signature ml-2 hover:scale-105 hover:text-orange-600">
          <Link to={"/skill"}>Skill</Link>
        </li>
        <li className="px-4 text-4xl font-signature ml-2 hover:scale-105  hover:text-orange-600">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-orange-600 hover:scale-105">
            <Link onClick={() => setNav(!nav)} to="/">
              Project
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-orange-600 hover:scale-105">
            <Link onClick={() => setNav(!nav)} to="/skill">
              Skill
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-orange-600 hover:scale-105">
            <Link onClick={() => setNav(!nav)} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
