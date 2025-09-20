import styles from "./Product.module.scss";
import { useState } from "react";

export function Product() {
  const [num, useNum] = useState(0);

  const Price = () => {
    useNum(num + 1);
  };

  return (
    <div className={styles.product_card}>
      <div className={styles.img_product}>
        <img
          width={316}
          height={316.02}
          src="https://media.dodostatic.net/image/r:292x292/0198da9ee2dd75038d9b6f7f23810d42.avif"
          alt="name"
        />
      </div>
      <h1 className={styles.name}>Терияки</h1>
      <div className={styles.card_select_block}>
        <div className={styles.dough}>
          <button className={styles.active}>тонкое</button>
          <button>традиционное</button>
        </div>
        <div className={styles.size}>
          <button className={styles.active}>25 см</button>
          <button>30 см</button>
          <button>40 см</button>
        </div>
      </div>
      <div className={styles.bottom_card}>
        <h2>от 458 ₽</h2>
        <button onClick={Price}>
          + Добавить <span className={styles.num}>{num}</span>
        </button>
      </div>
    </div>
  );
}
