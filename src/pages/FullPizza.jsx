import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function FullPizza() {
  const params = useParams();

  const [pizza, setPizza] = useState();

  useEffect(() => {
    async function paramsAxios() {
      try {
        const { data } = await axios.get(
          `https://68be220c227c48698f86132b.mockapi.io/items/${params.id}`,
        );
        setPizza(data);
      } catch (error) {}
    }

    paramsAxios();
  }, [params.id]);

  if (!pizza) {
    return <div>Загрузка</div>;
  }

  return (
    <div className="main_container">
      <div className="full_pizza_content">
        <img src={pizza.imageUrl} alt="Пицца" />
        <div className="right">
          <h1>{pizza.title}</h1>
          <p>{pizza.description}</p>
        </div>
      </div>
    </div>
  );
}
