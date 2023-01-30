import React from "react";
import "./ChartsCard.scss";
import justin from "../../assets/toplist-dummy.jpeg";
import { overflowDelimiter } from "../../helpers/dynamic_helpers";

const ChartsCard = ({ title, artist, thumbnail }) => {
  return (
    <div className="chartscard__container">
      <div className="chartscard__content">
        <img src={thumbnail} alt="Logo" />
        <div className="chartscard__flex">
          <h2>{overflowDelimiter(title, "title")}</h2>
          <p>The hottest tracks. Cover: {overflowDelimiter(artist, "cover")}</p>
        </div>
      </div>
    </div>
  );
};

export default ChartsCard;
