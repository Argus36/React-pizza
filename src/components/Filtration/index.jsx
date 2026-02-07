import styles from "./Filtration.module.scss";
import { useState } from "react";

export function Filtration({ categoryId, onClickCategory, sort, onClickSort }) {
  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые"];

  const [open, setOpen] = useState(false);
  const listSort = [
    { name: "Популярности 🡇", sortProperty: "rating" },
    { name: "Популярности 🡅", sortProperty: "-rating" },
    { name: "Цене 🡇", sortProperty: "price" },
    { name: "Цене 🡅", sortProperty: "-price" },
    { name: "Алфавиту 🡇", sortProperty: "title" },
    { name: "Алфавиту 🡅", sortProperty: "-title" },
  ];

  return (
    <div className={styles.content_top}>
      <div className={styles.categories}>
        {categories.map((categoryName, index) => (
          <button
            key={index}
            onClick={() => onClickCategory(index)}
            className={categoryId === index ? `${styles.active}` : ""}>
            {categoryName}
          </button>
        ))}
      </div>
      <div className={styles.sort}>
        <div className={styles.sort__label}>
          <p
            onClick={() => {
              setOpen(!open);
            }}>
            Сортировка по <b>{sort.name}</b>
          </p>
        </div>
        {open && (
          <div className={styles.sort__popup}>
            {listSort.map((obj, i) => (
              <button
                key={i}
                onClick={() => {
                  setOpen(!open);
                  onClickSort(obj);
                }}
                className={
                  sort.sortProperty === obj.sortProperty ? styles.active : ""
                }>
                {obj.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
