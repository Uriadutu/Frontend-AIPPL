import React from "react";
import Navbar from "../component/Navbar";
import BackgroundTop from "../img/BgTop.png";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div
        className="flex min-h-screen m-0 bg-white pt-10 "
        style={{
          backgroundImage: `url(${BackgroundTop})`,
        //   backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center",
        }}
      >
        <div className="flex-1 p-5">
          <main className="min-h-screen m-0">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
