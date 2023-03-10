import React from "react";
import { useSelector } from "react-redux";
import { MetroSpinner } from "react-spinners-kit";
import ChartsCard from "../../organisms/ChartsCard/ChartsCard";
import justing from "../../assets/toplist-dummy.jpeg";
import {
  getGlobalHits,
  getGlocalHitsPreview,
  isFetching,
} from "../../redux/features/globalHitsSlice";
import "./TopGlobalCharts.scss";
import { Link } from "react-router-dom";

const TopGlobalCharts = () => {
  const globalHitsData = useSelector(getGlobalHits);
  const isGlobalHitsLoading = useSelector(isFetching);
  const globalHitsPreviewData = useSelector(getGlocalHitsPreview);

  return (
    <div className="topcharts__container">
      <div className="topcharts__header">
        <h2>Charts</h2>
        <Link to="/charts/all">
          <p>Show All</p>
        </Link>
      </div>
      <div className="topcharts__flex">
        {isGlobalHitsLoading ? (
          <MetroSpinner
            size={30}
            color="#1DB954"
            loading={isGlobalHitsLoading}
          />
        ) : (
          globalHitsPreviewData.map((el) => (
            <div key={el.key}>
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

export default TopGlobalCharts;
