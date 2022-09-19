import { useSelector } from "react-redux";
import { ResultPreview } from "./result-preview";

export const ResultsList = () => {
  const currResults = useSelector((state) => state.youtube.results);

  return (
    <section className="results-list">
      <ul>
        {currResults.map((result, idx) => {
          return <ResultPreview key={idx} result={result} />;
        })}
      </ul>
    </section>
  );
};
