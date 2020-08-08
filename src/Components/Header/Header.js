import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/icons/AccountCircle";
import "./Header.css";
import { useDataLayerValue } from "../../Context/DataLayer";
const Header = () => {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="search for Artists,Songs,Albums " />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="VB" />
        <p>{user?.display_name}</p>
      </div>
    </div>
  );
};

export default Header;
