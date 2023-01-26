import React from "react";
import justin from "../../assets/toplist-dummy.jpeg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./TopList.scss";
import { useSelector } from "react-redux";
import { recommendationsList } from "../../redux/reducers/recommendationsSlice";

const TopList = () => {
  const recommendedData = useSelector(recommendationsList);
  console.log(recommendedData.tracks);
  const data = data.length === 0 ? [] : recommendedData.tracks.slice(0, 6);

  return (
    <div className="toplist__container">
      {data?.map((el) => (
        <div className="toplist__card">
          <div className="toplist__thumb">
            <img src={justin} alt="thumbnail" />
            <h4>{el.title}</h4>
          </div>
          <div className="toplist__button">
            <button className="active">
              <PlayArrowIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopList;
