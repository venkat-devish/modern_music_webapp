import React from "react";
import ChartsCard from "../../organisms/ChartsCard/ChartsCard";
import "./TopGlobalCharts.scss";

const TopGlobalCharts = () => {
  return (
    <div className="topcharts__container">
      <div className="topcharts__header">
        <h2>Charts</h2>
        <p>Show All</p>
      </div>
      <div className="topcharts__flex">
        <div>
          <ChartsCard />
        </div>
        <div>
          <ChartsCard />
        </div>
        <div>
          <ChartsCard />
        </div>
        <div>
          <ChartsCard />
        </div>
        <div>
          <ChartsCard />
        </div>
        <div>
          <ChartsCard />
        </div>
      </div>
    </div>
  );
};

export default TopGlobalCharts;
