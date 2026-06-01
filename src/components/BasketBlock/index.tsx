import styles from "./CartBlock.module.scss";
import checkbox from "../../assets/Basket/Agree checkbox.png";
import close from "../../assets/Basket/Close.svg";

import { BasketProduct } from "../BasketProduct";
import { useAppSelector, useAppDispatch } from "../../redux/hook";

import { clearItems } from "../../redux/slices/cartSlice";

export function BasketBlock() {
  const dispatch = useAppDispatch();

  const items: {
    count: number;
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number;
    type: string;
  }[] = useAppSelector((state) => state.cart.items);

  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <div className={styles.flex}>
          <h2>Корзина</h2>
          {items.length ? (
            <img
              onClick={() => dispatch(clearItems())}
              src={close}
              alt="close"
            />
          ) : (
            <></>
          )}
        </div>
        <div className={styles.basket}>
          {items.map((item, index) => (
            <BasketProduct key={index} {...item} />
          ))}
        </div>
      </div>
      <div className={styles.right_container}>
        <h3>Товары, {} шт.</h3>
        <div className={styles.total}>
          <h3>Итого: </h3>
          <h3>{0} ₽</h3>
        </div>
        <button>Заказать</button>
        <div className={styles.agree}>
          <img src={checkbox} alt="checkbox" />
          <p>
            Соглашаюсь с{" "}
            <a
              href="https://dodofranchise.ru/useragreement.html?ysclid=mgquwpy6ir979252354"
              rel="noreferrer">
              правилами пользования торговой площадкой
            </a>{" "}
            и{" "}
            <a
              href="https://dodofranchise.ru/useragreement.html?ysclid=mgquwpy6ir979252354"
              rel="noreferrer">
              возврата
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
