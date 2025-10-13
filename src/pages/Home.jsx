import { Products } from "../components/Products";
import { Skeleton } from "../components/Products/Skeleton";
import { Filtration } from "../components/Filtration";

import { useState, useEffect } from "react";

export default function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      fetch("https://68be220c227c48698f86132b.mockapi.io/items")
        .then((response) => response.json())
        .then((result) => {
          setItems(result);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <div className="main_container">
      <Filtration />
      <div className="main_content">
        {isLoading
          ? [...new Array(34)].map((_, i) => <Skeleton key={i} />)
          : items.map((value) => <Products key={value.id} {...value} />)}
      </div>
    </div>
  );
}
