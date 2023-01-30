import React from "react";
import Discover from "../Discover/Discover";
import SideBar from "../SideBar/SideBar";
import "./Layout.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopGlobalCharts from "../charts/TopGlobalCharts";
import TopGlobalChartsAll from "../charts/TopGlobalChartsAll";

const Layout = () => {
  return (
    <div className="layout">
      <SideBar />
      <div className="layout__content">
        <Router>
          <Routes>
            <Route path="/" element={<Discover />} />
            <Route path="/charts/all" element={<TopGlobalChartsAll />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default Layout;
