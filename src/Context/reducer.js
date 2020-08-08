export const initialState = {
  user: null,
  playLists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  spotify: null,
  top_artists: null,
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_DISCOVERWEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_PLAYLISTS":
      console.log(action);
      return {
        ...state,
        playLists: action.playlists,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    default:
      return { state };
  }
};
export default reducer;
