import styles from "./CartBlock.module.scss";
import checkbox from "../../assets/Basket/Agree checkbox.png";

import { useEffect, useRef, useState } from "react";

export function BasketBlock() {
  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <h2>Корзина</h2>
        <div className={styles.basket}>
          <div className={styles.item}>{/*<img src="" alt="item" />*/}</div>
        </div>
      </div>
      <div className={styles.right_container}>
        <h2>Товары, {} шт.</h2>
        <div className={styles.total}>
          <h2>Итого: </h2>
          <h2>{0} ₽</h2>
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
