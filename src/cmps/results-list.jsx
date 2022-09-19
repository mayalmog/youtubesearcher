import { useSelector } from "react-redux";

export const ResultsList = () => {
  const currResults = useSelector((state) => state.youtube.results);

  return <section className="results-list"></section>;
};
