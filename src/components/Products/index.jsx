import styles from "./Products.module.scss";
import { useState, useRef } from "react";

export function Products({ title, price, imageUrl, sizes, types }) {
  const [num, useNum] = useState(0);
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const width = useRef(window.innerWidth);

  const Plus = () => {
    useNum(num + 1);
  };
  const Minus = () => {
    useNum(num - 1);
  };

  const typesNumber = ["тонкое", "традиционное"];

  return (
    <div className={styles.product_card}>
      <div className={styles.img_product}>
        <img width={316} height={316.02} src={imageUrl} alt="name" />
      </div>
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}>
        <h1 className={styles.name}>{title}</h1>
        <div className={styles.card_select_block}>
          <div className={styles.dough}>
            {types.map((value, index) => (
              <button
                key={index}
                onClick={() => setActiveType(value)}
                className={activeType === index ? styles.active : ""}>
                {typesNumber[value]}
              </button>
            ))}
          </div>
          <div className={styles.size}>
            {sizes.map((value, index) => (
              <button
                key={index}
                onClick={() => setActiveSize(index)}
                className={activeSize === index ? styles.active : ""}>
                {value} см
              </button>
            ))}
          </div>
        </div>
        <div className={styles.bottom_card}>
          <h2>
            от {width.current < 1024 && <br />}
            {price} ₽
          </h2>
          {num === 0 ? (
            <button style={{ cursor: "pointer" }} onClick={Plus}>
              <p>Добавить</p>
            </button>
          ) : (
            <button>
              <span onClick={Minus} className={styles.minus}>
                {num > 0 ? "–" : ""}
              </span>
              <span className={styles.num}>{num > 0 ? `${num}` : ""}</span>
              <span onClick={Plus} className={styles.plus}>
                {num > 0 ? "+" : ""}
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
