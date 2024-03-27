import React from "react";
import { Link } from "react-router-dom";
import LogoAPK from "../img/LogoApk.png";

const Navbar = () => {
  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-md border-b w-full fixed flex justify-between items-center px-4 py-2 z-10">
      <Link to="/">
        <img src={LogoAPK} alt="Logo" className=" h-10" />
      </Link>
      <div className="flex space-x-4 text-gray">
        <Link to="/">
          <h1 className="text-gray">HOME</h1>
        </Link>
        <Link to="/about">
          <h1 className="text-gray">ABOUT</h1>
        </Link>
        <Link to="/contact">
          <h1 className="text-gray">CONTACT</h1>
        </Link>
      </div>
      <Link to="/login">
        <h1 className="text-white bg-blue-500 px-2 py-1 rounded">LOGIN</h1>
      </Link>
    </div>
  );
};

export default Navbar;
