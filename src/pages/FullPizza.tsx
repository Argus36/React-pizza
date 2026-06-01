import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { FC } from "react";

export const FullPizza: FC = () => {
  const params = useParams();

  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    description: string;
    price: number;
  }>();

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
    return (
      <div className="main_container">
        <div className="full_pizza_content">
          <h1>Загрузка...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="main_container">
      <div className="full_pizza_content">
        <img src={pizza.imageUrl} alt="Пицца" />
        <div className="right">
          <h1>{pizza.title}</h1>
          <h2>{pizza.description}</h2>
          <p>от {pizza.price} ₽</p>
        </div>
      </div>
    </div>
  );
};
