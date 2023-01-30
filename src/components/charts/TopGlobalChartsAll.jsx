import React from "react";
import { useSelector } from "react-redux";
import { MetroSpinner } from "react-spinners-kit";
import ChartsCard from "../../organisms/ChartsCard/ChartsCard";
import justing from "../../assets/toplist-dummy.jpeg";
import {
  getGlobalHits,
  isFetching,
} from "../../redux/features/globalHitsSlice";
import "./TopGlobalChartsAll.scss";
import { Link } from "react-router-dom";

const TopGlobalChartsAll = () => {
  const globalHitsData = useSelector(getGlobalHits);
  const isGlobalHitsLoading = useSelector(isFetching);

  return (
    <div className="globalCharts__container">
      <div className="globalCharts__header">
        <h2>Charts</h2>
      </div>
      <div className="globalCharts__flex">
        {isGlobalHitsLoading ? (
          <MetroSpinner
            size={30}
            color="#1DB954"
            loading={isGlobalHitsLoading}
          />
        ) : (
          globalHitsData.map((el) => (
            <div className="globalCharts__card" key={el.key}>
              <ChartsCard
                title={el.title}
                artist={el.subtitle}
                thumbnail={el.images ? el.images.coverarthq : justing}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TopGlobalChartsAll;
