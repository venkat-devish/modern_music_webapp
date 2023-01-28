import React from "react";
import { useSelector } from "react-redux";
import { MetroSpinner } from "react-spinners-kit";
import ChartsCard from "../../organisms/ChartsCard/ChartsCard";
import {
  getGlobalHits,
  isFetching,
} from "../../redux/reducers/globalHitsSlice";
import "./TopGlobalCharts.scss";

const TopGlobalCharts = () => {
  const globalHitsData = useSelector(getGlobalHits);
  const isGlobalHitsLoading = useSelector(isFetching);
  console.log(globalHitsData);
  return (
    <div className="topcharts__container">
      <div className="topcharts__header">
        <h2>Charts</h2>
        <p>Show All</p>
      </div>
      <div className="topcharts__flex">
        {isGlobalHitsLoading ? (
          <MetroSpinner
            size={30}
            color="#1DB954"
            loading={isGlobalHitsLoading}
          />
        ) : (
          globalHitsData.map((el) => (
            <div key={el.key}>
              <ChartsCard
                title={el.title}
                artist={el.subtitle}
                thumbnail={el.images.coverarthq}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TopGlobalCharts;
