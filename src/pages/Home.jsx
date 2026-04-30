import { Products } from "../components/Products";
import { Skeleton } from "../components/Products/Skeleton";
import { Filtration, listSort } from "../components/Filtration";
import { Pagination } from "../components/Pagination";

import { useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router";

import { setPage, setQuery } from "../redux/slices/filterSlice";
import { fetchPizzas } from "../redux/slices/pizzaSlice";

export default function Home() {
  const navigate = useNavigate();

  const { items, status, pageId } = useSelector((state) => state.pizza);

  const { categoryId, currentPage, sort, searchValue } = useSelector(
    (state) => state.filter,
  );

  const dispatch = useDispatch();

  const sortType = sort.sortProperty;

  const isRender = useRef(false);

  const getPizzas = useCallback(() => {
    const sortBy = sortType.replace("-", "");
    const order = sortType.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `&category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(fetchPizzas({ currentPage, category, sortBy, order, search }));

    if (pageId < currentPage) {
      console.log(`action 2:  ${pageId}`);
      dispatch(setPage(pageId));
    }
    console.log(`action 2.1:  ${pageId}`);
  }, [currentPage, categoryId, dispatch, pageId, searchValue, sortType]);

  useEffect(() => {
    console.log(`action 3`);
    const query = qs.stringify({
      sortType,
      categoryId,
      currentPage,
    });

    navigate(`?${query}`);

    isRender.current = true;
  }, [categoryId, sortType, searchValue, currentPage, navigate]);

  useEffect(() => {
    console.log(`action 1`);
    if (window.location.search) {
      console.log(`action 1.1`);
      const params = qs.parse(window.location.search.substring(1));

      const sort = listSort.find((obj) => obj.sortProperty === params.sortType);

      dispatch(setQuery({ ...params, sort }));
    }
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);

    getPizzas();
  }, [categoryId, sortType, searchValue, currentPage, pageId, getPizzas]);

  const itemSlice = items.slice(12 * (currentPage - 1), 12 * currentPage);

  const pizzes =
    Array.isArray(items) &&
    itemSlice.map((value) => <Products key={value.id} {...value} />);
  const skeleton = [...new Array(12)].map((_, i) => <Skeleton key={i} />);

  return (
    <div className="main_container">
      <Filtration />

      {status === "error" ? (
        <div className="error">
          <p>Ой, какая-то техническая ошибка</p>
          <p>😿</p>
        </div>
      ) : (
        <>
          <div className="main_content">
            {status === "loading" ? skeleton : pizzes}
          </div>
          <Pagination items={pageId} />
        </>
      )}
    </div>
  );
}
