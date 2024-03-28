import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import LogoAPK from "../img/LogoApk.png";

const Navbar = () => {
  const location = useLocation(); // Gunakan useLocation untuk mendapatkan lokasi saat ini
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Set activeLink berdasarkan path saat ini
    if (location.pathname === "/") {
      setActiveLink("beranda");
    } else if (location.pathname === "/bantuan") {
      setActiveLink("bantuan");
    } else if (location.pathname === "/tentangkami") {
      setActiveLink("tentangkami");
    } else {
      setActiveLink("");
    }
  }, [location.pathname]); // Efek samping hanya dijalankan saat location.pathname berubah

  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-md border-b w-full fixed flex justify-between items-center px-4 py-2 z-10">
      <NavLink to="/" exact className="text-blue-500">
        <img src={LogoAPK} alt="Logo" className="h-10" />
      </NavLink>
      <div className="flex space-x-4 text-gray">
        <NavLink
          to="/"
          exact
          className={activeLink === "beranda" ? "text-blue-500" : ""}
        >
          <h1 className="text-gray">BERANDA</h1>
        </NavLink>
        <NavLink
          to="/bantuan"
          className={activeLink === "bantuan" ? "text-blue-500" : ""}
        >
          <h1 className="text-gray">BANTUAN</h1>
        </NavLink>
        <NavLink
          to="/tentangkami"
          className={activeLink === "tentangkami" ? "text-blue-500" : ""}
        >
          <h1 className="text-gray">TENTANG KAMI</h1>
        </NavLink>
      </div>
      <NavLink to="/login">
        <h1 className="text-white bg-blue-500 px-2 py-1 rounded">LOGIN</h1>
      </NavLink>
    </div>
  );
};

export default Navbar;
