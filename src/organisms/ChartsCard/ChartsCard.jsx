import React from "react";
import "./ChartsCard.scss";
import justin from "../../assets/toplist-dummy.jpeg";

const ChartsCard = () => {
  return (
    <div className="chartscard__container">
      <div className="chartscard__content">
        <img src={justin} alt="Logo" />
        <h2>Hot Hits India</h2>
        <p>The hottest tracks. Cover: Justin Bieber</p>
      </div>
    </div>
  );
};

export default ChartsCard;
