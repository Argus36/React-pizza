import styles from "./Filtration.module.scss";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSort, setCategoryId } from "../../redux/slices/filterSlice";

export const listSort = [
  { name: "Популярности 🡇", sortProperty: "rating" },
  { name: "Популярности 🡅", sortProperty: "-rating" },
  { name: "Цене 🡇", sortProperty: "price" },
  { name: "Цене 🡅", sortProperty: "-price" },
  { name: "Алфавиту 🡇", sortProperty: "title" },
  { name: "Алфавиту 🡅", sortProperty: "-title" },
];

export function Filtration() {
  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые"];

  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);
  const categoryId = useSelector((state) => state.filter.categoryId);

  const sortRef = useRef();

  const [open, setOpen] = useState(false);

  const onClickSort = (id) => {
    dispatch(setSort(id));
  };

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    const click = (event) => {
      if (!event.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", click);

    return () => {
      document.body.removeEventListener("click", click);
    };
  }, []);

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
      <div ref={sortRef} className={styles.sort}>
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
