import styles from "./Filtration.module.scss";
import { useState } from "react";

export function Filtration() {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState(0);
  const listSort = ["Популярности", "Цене", "Алфавиту"];
  const sortName = listSort[sort];

  return (
    <div className={styles.content_top}>
      <div className={styles.categories}>
        {categories.map((value, index) => {
          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={activeIndex === index ? `${styles.active}` : ""}>
              {value}
            </button>
          );
        })}
      </div>
      <div className={styles.sort}>
        <div className={styles.sort__label}>
          <p>
            Сортировка по{" "}
            <b
              onClick={() => {
                setOpen(!open);
              }}>
              {sortName}
            </b>
          </p>
        </div>
        {open && (
          <div className={styles.sort__popup}>
            {listSort.map((name, i) => {
              return (
                <button
                  key={i}
                  onClick={() => {
                    setOpen(!open);
                    setSort(i);
                  }}
                  className={sort === i ? styles.active : ""}>
                  {name}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
