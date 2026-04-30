import styles from "./CartBlock.module.scss";
import checkbox from "../../assets/Basket/Agree checkbox.png";

import { BasketProduct } from "../BasketProduct";
import { useDispatch, useSelector } from "react-redux";

export function BasketBlock() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);
  console.log(items);

  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <h2>Корзина</h2>
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
