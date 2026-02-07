import { Products } from "../components/Products";
import { Skeleton } from "../components/Products/Skeleton";
import { Filtration } from "../components/Filtration";
import { Pagination } from "../components/Pagination";

import { useState, useEffect } from "react";

export default function Home({ searchValue }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [page, setPage] = useState(1);
  const [pageId, setPageId] = useState(1);
  const [sort, setSort] = useState({
    name: "Популярности 🡇",
    sortProperty: "rating",
  });

  useEffect(() => {
    setIsLoading(true);

    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `&category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    try {
      fetch(
        `https://68be220c227c48698f86132b.mockapi.io/items?page=${page}${category}&sortBy=${sortBy}&order=${order}${search}`,
      )
        .then((response) => response.json())
        .then((result) => {
          setItems(result);
          setPageId(Math.ceil(result.length / 12));
          setIsLoading(false);
        });
    } catch (error) {
      console.error(error.message);
      setItems([]);
    }
  }, [categoryId, sort, searchValue, page]);

  const itemSlice = items.slice(12 * (page - 1), 12 * page);

  const pizzes =
    Array.isArray(items) &&
    itemSlice.map((value) => <Products key={value.id} {...value} />);
  const skeleton = [...new Array(34)].map((_, i) => <Skeleton key={i} />);

  return (
    <div className="main_container">
      <Filtration
        categoryId={categoryId}
        onClickCategory={(i) => setCategoryId(i)}
        sort={sort}
        onClickSort={(i) => {
          setSort(i);
        }}
      />
      <div className="main_content">{isLoading ? skeleton : pizzes}</div>
      <Pagination items={pageId} onChangePage={(number) => setPage(number)} />
    </div>
  );
}
