import { createSlice } from "@reduxjs/toolkit";
import { httpService } from "../../service/http.service";

export const deskSlice = createSlice({
  name: "youtube",
  initialState: {
    query: "",
    results: [],
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setResults: (state) => {
      state.results = httpService.getYouTubeResults();
    },
  },
});

export const { setQuery, setResults } = youtube.actions;

export default youtube.reducer;
