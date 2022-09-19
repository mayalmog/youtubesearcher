import { useSelector } from "react-redux";
import { ResultPreview } from "./result-preview";

export const ResultsList = () => {
  const currResults = useSelector((state) => state.youtube.results);
  const currPage = useSelector((state) => state.youtube.page);

  return (
    <section className="results-list">
      <ul>
        {currResults
          .slice((currPage - 1) * 10, currPage * 10)
          .map((result, idx) => {
            return <ResultPreview key={idx} result={result} />;
          })}
      </ul>
    </section>
  );
};

export default ResultsList;
