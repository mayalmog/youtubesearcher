import { createSlice } from "@reduxjs/toolkit";

export const youtubeSlice = createSlice({
  name: "youtube",
  initialState: {
    query: "",
    results: [],
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload.searchQuery;
    },
    setResults: (state, action) => {
      console.log("payload: ", action.payload);
      state.results = action.payload;
    },
  },
});

export const { setQuery, setResults } = youtubeSlice.actions;

export default youtubeSlice.reducer;
