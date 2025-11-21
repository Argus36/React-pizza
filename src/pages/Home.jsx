import { Products } from "../components/Products";
import { Skeleton } from "../components/Products/Skeleton";
import { Filtration } from "../components/Filtration";

import { useState, useEffect } from "react";

export default function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sort, setSort] = useState({
    name: "Популярности 🡇",
    sortProperty: "rating",
  });

  useEffect(() => {
    setIsLoading(true);

    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";

    try {
      fetch(
        `https://68be220c227c48698f86132b.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
      )
        .then((response) => response.json())
        .then((result) => {
          setItems(result);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error.message);
    }
  }, [categoryId, sort]);

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
      <div className="main_content">
        {isLoading
          ? [...new Array(34)].map((_, i) => <Skeleton key={i} />)
          : items.map((value) => <Products key={value.id} {...value} />)}
      </div>
    </div>
  );
}
