import styles from "./NotFound.module.scss";

export function NotFoundBlock() {
  return (
    <div className={styles.container}>
      <h1>😔</h1>
      <h2>Ничего не найдено</h2>
      <h3>
        К сожалению даннная страница отсутствует в нашем интернет-магазине
      </h3>
    </div>
  );
}
