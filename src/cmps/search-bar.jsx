import { useState } from "react";
import { useDispatch } from "react-redux";

import { httpService } from "../service/http.service";
import { setQuery, setResults } from "../store/youtube/youtubeSlice";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState(null);

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
    </section>
  );
};
