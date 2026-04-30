import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";

import style from "./Pagination.module.scss";
import { setPage } from "../../redux/slices/filterSlice";

export function Pagination({ items }) {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.filter.currentPage);

  return (
    <ReactPaginate
      className={style.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      forcePage={currentPage - 1}
      onPageChange={(val) => {
        dispatch(setPage(val.selected + 1));
      }}
      pageRangeDisplayed={5}
      pageCount={items}
      renderOnZeroPageCount={null}
    />
  );
}
