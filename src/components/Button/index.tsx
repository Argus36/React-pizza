import styles from "./Button.module.scss";

import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { addItem, removeItem } from "../../redux/slices/cartSlice";

type ButtonProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number;
  type: string;
};

export const Button: FC<ButtonProps> = (props) => {
  const dispatch = useAppDispatch();

  const { id, price } = props;

  const cartCount = useAppSelector((state) =>
    state.cart.items.find((obj) => obj.id === id),
  );

  const [count, setCount] = useState(cartCount ? cartCount.count : 0);

  const onClickAdd = () => {
    setCount(count + 1);

    dispatch(addItem({ ...props, count }));
  };

  const onClickRemove = () => {
    setCount(count - 1);

    dispatch(removeItem({ ...props, count }));
  };

  return (
    <div className={styles.bottom_card}>
      <h2>
        от <span>{price} ₽</span>
      </h2>
      {count === 0 ? (
        <button style={{ cursor: "pointer" }} onClick={onClickAdd}>
          <p>Добавить</p>
        </button>
      ) : (
        <button>
          <span onClick={onClickRemove} className={styles.minus}>
            {count > 0 ? "–" : ""}
          </span>
          <span className={styles.num}>{count > 0 ? `${count}` : ""}</span>
          <span onClick={onClickAdd} className={styles.plus}>
            {count > 0 ? "+" : ""}
          </span>
        </button>
      )}
    </div>
  );
};
