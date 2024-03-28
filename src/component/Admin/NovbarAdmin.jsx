import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoAPK from "../../img/LogoApk.png";
import { LogOut, reset } from "../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";


const Navbar = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
    const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-md border-b w-full fixed flex justify-between items-center px-4 py-2 z-10">
      <Link to="/">
        <img src={LogoAPK} alt="Logo" className=" h-10" />
      </Link>
      <div className="flex space-x-4 text-gray">
        <Link to="/dashboard">
          <h1 className="text-gray">Dashboard</h1>
        </Link>
        <Link to="/about-admin">
          <h1 className="text-gray">ABOUT</h1>
        </Link>
        <Link to="/help-admin">
          <h1 className="text-gray">Help</h1>
        </Link>
      </div>
      

      <button onClick={logout}>
        <h1 className="text-white bg-red-500 px-2 py-1 rounded">LOGOUT</h1>
      </button>
    </div>
  );
};

export default Navbar;
