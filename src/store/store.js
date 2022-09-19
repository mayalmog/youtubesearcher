import { configureStore } from "@reduxjs/toolkit";
import youtubeReducer from "./youtube/youtubeSlice";

export default configureStore({
  reducer: {
    youtube: youtubeReducer,
  },
});
