import React from "react";
import "./SideBar.scss";
import mainLogo from "../../assets/spotify-logo.svg";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import CollectionsIcon from "@mui/icons-material/Collections";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { playlists } from "../../constants/sidebar_constants";

const SideBar = () => {
  return (
    <div className="sidebar__container">
      <div className="sidebar__logobox">
        <img src={mainLogo} alt="Music Logo" />
      </div>

      <div className="sidebar__navs">
        <div className="sidebar__global">
          <ul>
            <li>
              <HomeIcon />
              <span>Home</span>
            </li>
            <li>
              <SearchIcon />
              <span>Search</span>
            </li>
            <li>
              <CollectionsIcon />
              <span>Your Library</span>
            </li>
          </ul>
        </div>

        <div className="sidebar__global sidebar__customLogo">
          <li>
            <AddIcon />
            <span>Create Playlist</span>
          </li>
          <li>
            <FavoriteIcon />
            <span>Liked Songs</span>
          </li>
          <li>
            <BookmarkIcon />
            <span>Your Episodes</span>
          </li>
        </div>

        <div className="sidebar__playlist">
          {playlists.map((playlist, idx) => (
            <p key={idx}>{playlist.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
