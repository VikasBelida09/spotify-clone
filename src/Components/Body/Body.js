import React from "react";
import "./Body.css";
import Header from "../Header/Header";
import { useDataLayerValue } from "../../Context/DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "../SongRow/SongRow";
const Body = ({ s }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  const playPlaylist = (id) => {
    s.play({
      context_uri: `spotify:playlist:06wS690iYWowBMllKvYey6`,
    }).then((res) => {
      s.getMyCurrentPlayingTrack().then((r) => {
        dispatch({
          type: "SET_ITEM",
          item: r.item,
        });
        dispatch({
          type: "SET_PLAYING",
          playing: true,
        });
      });
    });
  };
  const playSong = (id) => {
    s.play({
      uris: [`spotify:track:${id}`],
    }).then((res) => {
      s.getMyCurrentPlayingTrack().then((r) => {
        dispatch({
          type: "SET_ITEM",
          item: r.item,
        });
        dispatch({
          type: "SET_PLAYING",
          playing: true,
        });
      });
    });
  };
  return (
    <div className="body">
      <Header s={s} />
      <div className="body__info">
        <img
          className="body__img"
          src={discover_weekly?.images ? discover_weekly?.images[0].url : ""}
          alt=""
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks?.items.map((item) => (
          <SongRow playSong={playSong} key={item.track} track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
