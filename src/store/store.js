import { configureStore } from "@reduxjs/toolkit";
import youtubeReducer from "./user/userSlice";

export default configureStore({
  reducer: {
    youtube: youtubeReducer,
  },
});
