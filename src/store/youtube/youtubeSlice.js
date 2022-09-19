import { createSlice } from "@reduxjs/toolkit";
import { httpService } from "../../service/http.service";

// const initialState = {
//   entities: [],
//   loading: false,
// };

// const getYouTubeResults = createAsyncThunk(
//   //action type string
//   "youtube/getYouTubeResults",
//   // callback function
//   async (thunkAPI) => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
//       (data) => data.json()
//     );
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
      state.query = action.payload;
    },
    setResults: (state) => {
      state.results = httpService.getYouTubeResults();
    },
  },
});

export const { setQuery, setResults } = youtubeSlice.actions;

export default youtubeSlice.reducer;

// export const deskSlice = createSlice({
//   name: "youtube",
//   initialState: {
//     query: "",
//     results: [],
//   },
//   reducers: {
//     setQuery: (state, action) => {
//       state.query = action.payload;
//     },
//     setResults: (state) => {
//       state.results = httpService.getYouTubeResults();
//     },
//   },
// });
