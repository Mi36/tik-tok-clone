import { combineReducers } from "redux";
import videosReducer from "./videosReducer";

export default combineReducers({
  videos: videosReducer,
});
