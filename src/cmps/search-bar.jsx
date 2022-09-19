import { useState } from "react";
import { httpService } from "../service/http.service";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [results, setResults] = useState(null);

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearchQuery(value);
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
      <p>{searchQuery}</p>
      {results && <pre>{JSON.stringify(results, null, 2)}</pre>}
    </section>
  );
};
