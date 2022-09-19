import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { httpService } from "../service/http.service";
import { setQuery, setResults } from "../store/youtube/youtubeSlice";

export const SearchBar = () => {
  const currQuery = useSelector((state) => state.youtube.query);
  // const currResults = useSelector((state) => state.youtube.results);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState(null);
  // const [localResults, setLocalResults] = useState(null);

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearchQuery(value);
    dispatch(setQuery({ searchQuery }));
  };

  const getResults = async (ev) => {
    ev.preventDefault();
    dispatch(setQuery({ searchQuery }));
    const results = await httpService.getYouTubeResults(searchQuery);
    console.log("results: ", results);
    // setLocalResults(results);
    // console.log(localResults);
    dispatch(setResults(results));
  };

  return (
    <section className="search-bar">
      <form>
        <label>
          <input type="text" name="search" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" onClick={getResults} />
      </form>
      {/* <p>local query: {searchQuery}</p> */}
      {/* <p>Store query: {currQuery}</p> */}
      {searchQuery && <pre>{JSON.stringify(searchQuery, null, 2)}</pre>}
      {/* {currQuery && <pre>{JSON.stringify(currQuery, null, 2)}</pre>} */}
      {/* {currResults && <pre>{JSON.stringify(currResults, null, 2)}</pre>} */}
    </section>
  );
};
