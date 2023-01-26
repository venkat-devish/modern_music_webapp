import React from "react";
import Discover from "../Discover/Discover";
import SideBar from "../SideBar/SideBar";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout__sidebar">
        <SideBar />
      </div>
      <div className="layout__discover">
        <Discover />
      </div>
    </div>
  );
};

export default Layout;
