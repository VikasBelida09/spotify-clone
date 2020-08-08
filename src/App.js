import React, { useEffect } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import { getTokenFromUrl } from "./spotify";
import Player from "./Components/Pkayer/Player";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./Context/DataLayer";
const spotify = new SpotifyWebApi();
const App = () => {
  const [{ token }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) => {
        console.log(response);
        dispatch({
          type: "SET_DISCOVERWEEKLY",
          discover_weekly: response,
        });
      });
      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
    }
  }, [token, dispatch]);
  return (
    <div className="app">
      {console.log(token)}
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
};

export default App;
