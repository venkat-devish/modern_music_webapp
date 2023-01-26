import React from "react";
import "./DiscoverHeader.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Avatar from "../../assets/avatar.svg";

const DiscoverHeader = () => {
  return (
    <div className="discover-header__container">
      <div className="discover-header__icons">
        <span>
          <KeyboardArrowLeftIcon />
        </span>
        <span>
          <ChevronRightIcon />
        </span>
      </div>
      <div className="discover-header__user">
        <img src={Avatar} alt="avatar" />
        <p>Venkat</p>
        <KeyboardArrowDownIcon />
      </div>
    </div>
  );
};

export default DiscoverHeader;
