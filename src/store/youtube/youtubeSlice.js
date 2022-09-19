import { createSlice } from "@reduxjs/toolkit";
// import { httpService } from "../../service/http.service";

// const initialState = {
//   query: "",
//   results: [],
//   loading: false,
// };

// const getYouTubeResults = createAsyncThunk(
//   //action type string
//   "youtube/getYouTubeResults",
//   // callback function
//   async () => {
//     const res = await httpService.getYouTubeResults(youtubeSlice.query);
//     console.log(res);
//     return res;
//   }
// );

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
  // extraReducers: {
  //   [getYouTubeResults.pending]: (state) => {
  //     state.loading = true;
  //   },
  //   [getYouTubeResults.fulfilled]: (state, { payload }) => {
  //     state.loading = false;
  //     state.results = payload;
  //   },
  //   [getYouTubeResults.rejected]: (state) => {
  //     state.loading = false;
  //   },
  // },
});

export const { setQuery, setResults } = youtubeSlice.actions;

export default youtubeSlice.reducer;
