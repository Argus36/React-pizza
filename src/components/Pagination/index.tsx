import ReactPaginate from "react-paginate";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

import style from "./Pagination.module.scss";
import { setPage } from "../../redux/slices/filterSlice";
import { FC } from "react";

type PaginationProps = {
  pag: number;
};

export const Pagination: FC<PaginationProps> = ({ pag }) => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.filter.currentPage);

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
      pageCount={pag}
      renderOnZeroPageCount={null}
    />
  );
};
