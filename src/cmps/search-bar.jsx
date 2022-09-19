import { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
        <input
          className="form-control"
          type="text"
          name="search"
          placeholder="Search"
          onChange={handleChange}
        />
        <button type="submit" onClick={getResults}>
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </button>
      </form>
    </section>
  );
};
