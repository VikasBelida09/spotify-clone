import React from "react";
import "./Player.css";
import SideBar from "../SideBar/SideBar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <SideBar />
        <Body s={spotify} />
      </div>
      <Footer s={spotify} />
    </div>
  );
};

export default Player;
