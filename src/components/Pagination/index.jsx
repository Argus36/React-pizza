import ReactPaginate from "react-paginate";

import style from "./Pagination.module.scss";

export function Pagination({ items, onChangePage }) {
  return (
    <ReactPaginate
      className={style.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(val) => {
        onChangePage(val.selected + 1);
      }}
      pageRangeDisplayed={5}
      pageCount={items}
      renderOnZeroPageCount={null}
    />
  );
}
