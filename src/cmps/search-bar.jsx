import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { httpService } from "../service/http.service";
import { setQuery } from "../store/youtube/youtubeSlice";

export const SearchBar = () => {
  const currQuery = useSelector((state) => state.youtube.query);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState(null);
  const [results, setResults] = useState(null);

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearchQuery(value);
    dispatch(setQuery({ searchQuery }));
  };

  const getResults = async (ev) => {
    ev.preventDefault();
    const results = await httpService.getYouTubeResults(searchQuery);
    setResults(results);
  };

  return (
    <section className="search-bar">
      <form>
        <label>
          <input type="text" name="search" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" onClick={getResults} />
      </form>
      <p>local query: {searchQuery}</p>
      <p>Store query: {currQuery}</p>
      {results && <pre>{JSON.stringify(results, null, 2)}</pre>}
    </section>
  );
};
