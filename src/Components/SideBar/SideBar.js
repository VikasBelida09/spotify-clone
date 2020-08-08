import React from "react";
import "./SideBar.css";
import SideBarOptions from "./SideBarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../../Context/DataLayer";
const SideBar = () => {
  const [{ playLists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify-logo"
      />
      <SideBarOptions Icon={HomeIcon} title="Home" />
      <SideBarOptions Icon={SearchIcon} title="Search" />
      <SideBarOptions Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      {console.log(playLists)}
      <strong className="sidebar__title">PLAYLIST</strong>
      <hr />
      {playLists?.items?.map((playlist) => (
        <SideBarOptions key={playlist.name} title={playlist.name} />
      ))}
    </div>
  );
};

export default SideBar;
