import "./App.css";
import { SearchBar } from "./cmps/search-bar.jsx";
import { ResultsList } from "./cmps/results-list";

function App() {
  return (
    <section className="App">
      <SearchBar />
      <ResultsList />
    </section>
  );
}

export default App;
