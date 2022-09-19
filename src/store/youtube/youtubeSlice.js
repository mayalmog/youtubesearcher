import { createSlice } from "@reduxjs/toolkit";

export const youtubeSlice = createSlice({
  name: "youtube",
  initialState: {
    query: "",
    results: [],
    page: 1,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload.searchQuery;
    },
    setResults: (state, action) => {
      state.results = action.payload.sort((a, b) => b.rating - a.rating);
    },
    setPage: (state, action) => {
      state.page = action.payload.pageNum;
    },
  },
});

export const { setQuery, setResults, setPage } = youtubeSlice.actions;

export default youtubeSlice.reducer;
