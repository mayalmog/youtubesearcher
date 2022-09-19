import "./App.css";
import { SearchBar } from "./cmps/search-bar.jsx";
import { ResultsList } from "./cmps/results-list";
import Pagination from "./cmps/pagination";

function App() {
  return (
    <section className="App">
      <SearchBar />
      <ResultsList />
      <Pagination />
    </section>
  );
}

export default App;
