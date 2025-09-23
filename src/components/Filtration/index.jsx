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

  return (
    <div className={styles.content_top}>
      <div className={styles.categories}>
        {categories.map((value, index) => {
          return (
            <button
              onClick={() => setActiveIndex(index)}
              className={activeIndex === index ? `${styles.active}` : ""}>
              {value}
            </button>
          );
        })}
      </div>
      <div className={styles.sort}>
        <select name="sort" id="select_sort">
          <option value="">Популярности</option>
          <option value="">Цене</option>
          <option value="">Алфавиту</option>
        </select>
      </div>
    </div>
  );
}
