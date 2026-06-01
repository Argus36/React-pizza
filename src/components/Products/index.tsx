import styles from "./Products.module.scss";
import { FC, useState } from "react";

import { Button } from "../Button";
import { Link } from "react-router";

type ProductProps = {
  count: number;
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

export const Products: FC<ProductProps> = ({
  id,
  title,
  price,
  imageUrl,
  sizes,
  types,
}) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const typesNumber = ["тонкое", "традиционное"];

  const item = {
    id,
    title,
    price,
    imageUrl,
    sizes: sizes[activeSize],
    type: typesNumber[activeType],
  };

  return (
    <div className={styles.product_card}>
      <Link
        to={`/React-pizza/${id}`}
        style={{ textDecoration: "none", zIndex: "1" }}>
        <div className={styles.img_product}>
          <img width={316} height={316.02} src={imageUrl} alt="name" />
        </div>
        <div
          onClick={(e) => e.preventDefault()}
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            zIndex: "9999",
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
          <Button key={item.id} {...item} />
        </div>
      </Link>
    </div>
  );
};
