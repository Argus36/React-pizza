import styles from "./BasketProduct.module.scss";
import close from "../../assets/Basket/Close.svg";

import { useDispatch } from "react-redux";

import { addItem, removeItem, clearLine } from "../../redux/slices/cartSlice";

export function BasketProduct({
  count,
  id,
  title,
  price,
  imageUrl,
  sizes,
  type,
}) {
  const dispatch = useDispatch();

  const item = {
    id,
    title,
    price,
    imageUrl,
    sizes: sizes,
    type: type,
  };

  const onClickAdd = () => {
    dispatch(addItem(item));
  };

  const onClickRemove = () => {
    dispatch(removeItem(item));
  };

  const onClickClearLine = () => {
    dispatch(clearLine(item));
  };

  return (
    <div className={styles.item}>
      <div className={styles.top}>
        <div className={styles.left}>
          <img src={imageUrl} alt="item" />
          <div className={styles.flex}>
            <h2 className={styles.name}>{title}</h2>
            <p className={styles.dough}>{type} тесто</p>
            <p className={styles.size}>{sizes} см.</p>
          </div>
        </div>
        <div className={styles.right}>
          <img onClick={onClickClearLine} src={close} alt="close" />
        </div>
      </div>
      <div className={styles.bottom}>
        <h3 className={styles.price}>{price} ₽</h3>
        <div className={styles.amount}>
          <span onClick={onClickRemove} className={styles.minus}>
            -
          </span>
          <span className={styles.num}>{count}</span>
          <span onClick={onClickAdd} className={styles.plus}>
            +
          </span>
        </div>
      </div>
    </div>
  );
}
