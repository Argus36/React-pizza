import styles from "./Button.module.scss";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../redux/slices/cartSlice";

export function Button(props) {
  const { id, price } = props;
  const dispatch = useDispatch();

  const cartCount = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id),
  );

  const [num, setNum] = useState(cartCount ? cartCount.count : 0);

  const onClickAdd = () => {
    setNum(num + 1);

    dispatch(addItem(props));
  };

  const onClickRemove = () => {
    setNum(num - 1);

    dispatch(removeItem(props));
  };

  return (
    <div className={styles.bottom_card}>
      <h2>
        от <span>{price} ₽</span>
      </h2>
      {num === 0 ? (
        <button style={{ cursor: "pointer" }} onClick={onClickAdd}>
          <p>Добавить</p>
        </button>
      ) : (
        <button>
          <span onClick={onClickRemove} className={styles.minus}>
            {num > 0 ? "–" : ""}
          </span>
          <span className={styles.num}>{num > 0 ? `${num}` : ""}</span>
          <span onClick={onClickAdd} className={styles.plus}>
            {num > 0 ? "+" : ""}
          </span>
        </button>
      )}
    </div>
  );
}
