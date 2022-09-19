import { useSelector, useDispatch } from "react-redux";

import { setPage } from "../store/youtube/youtubeSlice";

export const Pagination = () => {
  const currPage = useSelector((state) => state.youtube.page);
  const currResults = useSelector((state) => state.youtube.results);

  const dispatch = useDispatch();

  const handlePageChange = (pageNum) => {
    dispatch(setPage({ pageNum }));
  };

  if (!currResults.length) return "";
  return (
    <section className="pagination">
      <button
        className={currPage === 1 ? "active" : ""}
        onClick={() => handlePageChange(1)}
      >
        1
      </button>
      <button
        className={currPage === 2 ? "active" : ""}
        onClick={() => handlePageChange(2)}
      >
        2
      </button>
      <button
        className={currPage === 3 ? "active" : ""}
        onClick={() => handlePageChange(3)}
      >
        3
      </button>
    </section>
  );
};

export default Pagination;
