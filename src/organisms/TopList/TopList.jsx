import React from "react";
import justin from "../../assets/toplist-dummy.jpeg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./TopList.scss";
import { useSelector } from "react-redux";
import { recommendationsList } from "../../redux/features/recommendationsSlice";

const TopList = () => {
  const recommendedData = useSelector(recommendationsList);

  return (
    <div className="toplist__container">
      {recommendedData.map((el) => (
        <div key={el.key} className="toplist__card">
          <div className="toplist__thumb">
            <img src={el.images.coverarthq} alt="thumbnail" />
            <h4>{el.title}</h4>
          </div>
          <div className="toplist__button scale-up-center">
            <button className="active ">
              <PlayArrowIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopList;
