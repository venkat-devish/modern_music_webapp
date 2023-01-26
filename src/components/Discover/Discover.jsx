import React from "react";
import DiscoverHeader from "../../organisms/DiscoverHeader/DiscoverHeader";
import Recommended from "../../organisms/Recommended/Recommended";
import "./Discover.scss";

const Discover = () => {
  return (
    <div className="discover__container">
      <div className="discover__flex">
        <DiscoverHeader />
        <Recommended />
      </div>
    </div>
  );
};

export default Discover;
